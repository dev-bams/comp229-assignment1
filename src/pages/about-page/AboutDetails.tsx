/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import VerifiedIcon from "../../assets/icons/VerifiedIcon"; // Import the VerifiedIcon component
import profile2 from "../../assets/images/profile2.png"; // Import the profile2 image

// Component to display about details
function AboutDetails() {
  // Function to get the current date
  function getDate() {
    const date = new Date(); // Get current date
    const month = date.toLocaleString("default", { month: "short" }); // Get short month name
    const day = date.getDate(); // Get day of the month
    return `${month} ${day}`; // Return formatted date string
  }
  return (
    // Container div for about details with color transition, flex layout, gap, and border
    <div className="dark:text-first-text-color text-second-text-color transition-colors duration-300 flex flex-col gap-4 dark:bg-first-card bg-second-card rounded-lg dark:border-grey border-[.1px]">
      <div className="border-b-[.1px] dark:border-grey p-4">
        <div className="flex gap-2 items-center">
          {/* Profile image */}
          <img src={profile2} className="w-7 h-7 rounded-full" alt="Profile" />
          <div className="flex items-center justify-center gap-[.1rem]">
            {/* Name with verified icon */}
            <p className="font-bold dark:text-first-text-color transition-colors duration-300 text-second-text-color">
              khaleed
            </p>
            <VerifiedIcon /> {/* Verified icon */}
          </div>
          <p className="text-grey">·</p>
          <p className="text-grey">{getDate()}</p> {/* Current date */}
        </div>
      </div>
      <div className="p-4">
        {/* About text */}
        <p>
          👋 Hey there! I'm {/* Highlighted name */}
          <span className="text-first-accent dark:selection:bg-black dark:selection:text-first-accent selection:bg-slate-200">
            Khaleed Opeloyeru
          </span>
          , a software engineering student based in Canada 🍁. Passionate about
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

export default AboutDetails; // Export the AboutDetails component as the default export
