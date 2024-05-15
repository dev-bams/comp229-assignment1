import VerifiedIcon from "../../assets/icons/VerifiedIcon";
import profile2 from "../../assets/images/profile2.png";
function AboutDetails() {
  function getDate() {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  }
  return (
    <div className="dark:text-first-text-color text-second-text-color transition-colors duration-300 flex flex-col gap-4 dark:bg-first-card bg-second-card rounded-lg dark:border-grey border-[.1px]">
      <div className="border-b-[.1px] dark:border-grey p-4">
        <div className="flex gap-2 items-center">
          <img src={profile2} className="w-7 h-7 rounded-full" />
          <div className="flex items-center justify-center gap-[.1rem]">
            <p className=" font-bold dark:text-first-text-color transition-colors duration-300 text-second-text-color">khaleed</p>
            <VerifiedIcon />
          </div>
          <p className=" text-grey">·</p>
          <p className=" text-grey">{getDate()}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="">
          👋 Hey there! I'm{" "}
          <span className="text-first-accent dark:selection:bg-black dark:selection:text-first-accent selection:bg-slate-200">
            Khaleed
          </span>
          , a software engineering student based in canada 🍁. Passionate about
          crafting innovative solutions and exploring the endless possibilities
          of technology 💡.
          <br />
          <br /> Currently, I'm delving deep into the world of web development
          and 🌐 UI/UX design ✨, constantly honing my skills in front-end and
          back-end technologies. I'm also fascinated by the ever-evolving field
          of artificial intelligence 🤖 and its potential to revolutionize
          industries.
          <br />
          <br />
          You can catch me listening to everything from Rap to R&B to Afrobeat
          to HipHop 🎵. I'm probably listening to something right now - yeah, I
          love music that much 🙂.
          <br />
          <br />
          Feel free to connect with me to discuss all things tech, share
          creative ideas, or simply chat about life's adventures! 🚀.
        </p>
      </div>
    </div>
  );
}

export default AboutDetails;
