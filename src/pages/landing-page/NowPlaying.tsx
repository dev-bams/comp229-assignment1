import { useEffect, useState } from "react";
import querystring from "querystring";
import { BiErrorCircle } from "react-icons/bi";
import soundBar from "../../assets/images/soundbar.gif";
import albumPlaceholder from "../../assets/images/album.png";
import pause from "../../assets/images/pause.png";
// import offline from "../../assets/images/offline.png";
import spotify from "../../assets/images/spotify.png";

//Setting up the Spotify API and Endpoints
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const client_id = "c244c239215d4da09056ec542ed1ed44";
const client_secret = "0186dc83383a4c529e7dbad29857ffe1";
const refresh_token =
  "AQAap9Rt8wuxMnGOMkfmMXYh5nuMNJ_m_2e_z9uXW5LlbwNa8jzNiPdrGGeGdHFo96RNVHncRPxAeq1o2hdJmjBOFa_0Xm3_q0ko-q32Vz0OE7ffBdFXkZ3w1YAgSnYhFP0";

//Function to generate an access token using the refresh token every time the website is opened or refreshed
export const getAccessToken = async (
  client_id: string,
  client_secret: string,
  refresh_token: string
) => {
  //Creates a base64 code of client_id:client_secret as required by the API
  const basic = btoa(`${client_id}:${client_secret}`);

  //The response will contain the access token
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

//Uses the access token to fetch the currently playing song
export const getNowPlaying = async () => {
  try {
    //Generating an access token
    const { access_token } = await getAccessToken(
      client_id,
      client_secret,
      refresh_token
    );

    //Fetching the response
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    //If response status > 400 means there was some error while fetching the required information
    if (response.status > 400) {
      throw new Error("Unable to Fetch Song");
    } else if (response.status === 204) {
      //The response was fetched but there was no content
      throw new Error("Currently Not Playing");
    }

    //Extracting the required data from the response into separate variables
    const song = await response.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((artist: any) => artist.name)
      .join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    const timePlayed = song.progress_ms;
    const timeTotal = song.item.duration_ms;
    const artistUrl = song.item.album.artists[0].external_urls.spotify;

    //Returning the song details
    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error fetching currently playing song: ", error);
    return error.message.toString();
  }
};

//Main function to process the data and render the widget
const NowPlaying = () => {
  //Hold information about the currently playing song
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [nowPlaying, setNowPlaying] = useState<any>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying();
      setNowPlaying(data);
    };

    //The spotify API does not support web sockets, so in order to keep updating the currently playing song and time elapsed - call the API every second
    setInterval(() => {
      fetchNowPlaying();
    }, 2500);
  }, []);

  //Setting default values for the listener's current state and the duration of the song played
  let playerState = "";
  let secondsPlayed = 0,
    minutesPlayed = 0,
    secondsTotal = 0,
    minutesTotal = 0;
  let albumImageUrl = albumPlaceholder;
  let title = "";
  let artist = "";

  if (nowPlaying != null && nowPlaying.title) {
    //Used while displaying a sound bar/pause icon on the widget
    nowPlaying.isPlaying ? (playerState = "PLAY") : (playerState = "PAUSE");

    //Converting the playback duration from seconds to minutes and seconds
    secondsPlayed = Math.floor(nowPlaying.timePlayed / 1000);
    minutesPlayed = Math.floor(secondsPlayed / 60);
    secondsPlayed = secondsPlayed % 60;

    //Converting the song duration from seconds to minutes and seconds
    secondsTotal = Math.floor(nowPlaying.timeTotal / 1000);
    minutesTotal = Math.floor(secondsTotal / 60);
    secondsTotal = secondsTotal % 60;

    albumImageUrl = nowPlaying.albumImageUrl;
    title = nowPlaying.title;
    artist = nowPlaying.artist;
  } else if (nowPlaying === "Currently Not Playing") {
    //If the response returns this error message then we print the following text in the widget
    // playerState = "OFFLINE";
    // title = "I am currently not";
    // artist = "Listening to anything, check later 🙂.";
    playerState = "OFFLINE";
    title = "Black";
    artist = "Dave";
  } else {
    //If the response wasn't able to fetch anything then we display this
    // artist = "Listening to anything, check later 🙂.";
    playerState = "OFFLINE";
    title = "Black";
    artist = "Dave";
  }

  //Used to set 0 as padding when the it is a single digit number
  const pad = (n: number): string => {
    return n < 10 ? "0" + n : n.toString();
  };

  return (
    //Depending on the value of playerState, the href, album image and icons are updated
    <a
      className="cursor-cell relative"
      href={
        playerState === "PLAY" || playerState === "PAUSE"
          ? nowPlaying.artistUrl
          : "https://open.spotify.com/artist/6Ip8FS7vWT1uKkJSweANQK"
      }
    >
      <div
        id="nowListening"
        className="flex  dark:text-first-text-color text-second-text-color dark:border-grey border-[.1px] p-3 gap-3 rounded-lg dark:bg-first-card bg-second-card transition-colors duration-300"
      >
        {/* Album image and href displayed based on playerState */}
        <div className="rounded-lg w-32 h-32">
          {playerState === "PLAY" || playerState === "PAUSE" ? (
            <a href={nowPlaying.songUrl}>
              <img
                src={albumImageUrl}
                alt="Album"
                className="rounded-lg cursor-cell"
              />
            </a>
          ) : (
            <img
              src={
                "https://i.scdn.co/image/ab67616d0000b273c1c8d2889455db6d03d309ed"
              }
              alt="Album"
              className="rounded-lg"
            />
            // <img src={albumImageUrl} alt="Album" className="rounded-lg" />
          )}
        </div>
        <div className="flex flex-col justify-between grow">
          <div
            id=""
            className="flex flex-col dark:text-first-text-color text-second-text-color transition-colors duration-300"
          >
            {/* Song Title displayed based on playerState */}
            <div
              className={`nowPlayingTitle ${
                title.length > 15 ? "marquee-content" : " "
              }`}
            >
              {playerState === "PLAY" || playerState === "PAUSE" ? (
                <a
                  href={nowPlaying.songUrl}
                  className="dark:text-first-text-color text-second-text-color text-lg cursor-cell transition-colors duration-300"
                >
                  {title}
                </a>
              ) : (
                <a
                  href={"https://open.spotify.com/track/0J43IKwcofdlTQPjcbHxCM"}
                  className="dark:text-first-text-color text-second-text-color text-lg cursor-cell transition-colors duration-300"
                >
                  {title}
                </a>
                // title
              )}
            </div>
            {/* Artist displayed based on playerState */}
            <div className="">
              {playerState === "PLAY" || playerState === "PAUSE" ? (
                <a
                  href={nowPlaying.artistUrl}
                  className="text-grey cursor-cell"
                >
                  {artist}
                </a>
              ) : (
                <a
                  href={
                    "https://open.spotify.com/artist/6Ip8FS7vWT1uKkJSweANQK"
                  }
                  className="text-grey cursor-cell"
                >
                  {artist}
                </a>
                // artist
              )}
            </div>
          </div>
          {/* Icon displayed based on playerState */}
          <div className="nowPlayingState w-full">
            {playerState === "PLAY" ? (
              <div className="flex justify-between dark:text-first-text-color text-second-text-color transition-colors duration-300">
                <div className="flex gap-4 items-center">
                  {pad(minutesPlayed)}:{pad(secondsPlayed)}{" "}
                  <img
                    alt="soundbar"
                    src={soundBar}
                    title="Now Listening"
                    className="h-8"
                  />
                  {pad(minutesTotal)}:{pad(secondsTotal)}
                </div>
                <div className="flex gap-1 items-center">
                  <img src={spotify} className="w-4 h-4" />
                  <p className="text-grey max-sm:hidden">Spotify</p>
                </div>
              </div>
            ) : playerState === "PAUSE" ? (
              <div className="flex justify-between dark:text-first-text-color text-second-text-color transition-colors duration-300">
                <div className="flex gap-4 items-center">
                  {pad(minutesPlayed)}:{pad(secondsPlayed)}{" "}
                  <img
                    alt="soundbar"
                    src={pause}
                    title="Now Listening"
                    className="h-8"
                  />
                  {pad(minutesTotal)}:{pad(secondsTotal)}
                </div>
                <div className="flex gap-1 items-center">
                  <img src={spotify} className="w-4 h-4" />
                  <p className="text-grey max-sm:hidden">Spotify</p>
                </div>
              </div>
            ) : // <AiOutlinePauseCircle size={40} />
            playerState === "OFFLINE" ? (
              <div className="flex justify-between dark:text-first-text-color text-second-text-color transition-colors duration-300">
                <div className="flex gap-4 items-center">
                  {pad(3)}:{pad(48)}{" "}
                  <img
                    alt="soundbar"
                    src={soundBar}
                    title="Now Listening"
                    className="h-8"
                  />
                  {pad(3)}:{pad(48)}
                </div>
                <div className="flex gap-1 items-center">
                  <img src={spotify} className="w-4 h-4" />
                  <p className="text-grey max-sm:hidden">Spotify</p>
                </div>
              </div>
            ) : (
              // <div className="flex justify-between dark:text-first-text-color text-second-text-color transition-colors duration-300">
              //   <img src={offline} className="h-8" />

              //   <div className="flex gap-1 items-center">
              //     <img src={spotify} className="w-4 h-4" />
              //     <p className="text-grey">Spotify</p>
              //   </div>
              // </div>
              <BiErrorCircle size={40} />
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default NowPlaying;
