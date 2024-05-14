import { useState } from "react";
import Contact from "../../pages/contact-page/Contact";

function ContactSection() {
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  function setIsLinkClickedTrue() {
    setIsLinkClicked(true);
  }
  return (
    <div
      className="flex justify-center dark:bg-first-primary bg-second-primary transition-colors duration-300"
      id="contact"
    >
      <div className="max-w-7xl w-full p-4 flex flex-col dark:text-second-accent text-second-text-color transition-colors duration-300">
        <div className="flex justify-center items-center flex-col gap-2 ">
          <Contact />
          <p className="flex flex-wrap items-center justify-center">
            Designed & Developed by{" "}
            <span className="transition">
              <a
                href="https://github.com/dev-bams"
                className="cursor-cell text-first-accent"
              >
                &nbsp;Khaleed Opeloyeru
              </a>
            </span>
          </p>
          <div className="flex gap-2">
            <a
              href="https://v1.khaleed.co/"
              className="cursor-cell text-second-accent hover:text-first-accent transition-colors duration-300"
            >
              V1
            </a>
            <span>·</span>
            <p className="text-first-accent">V2</p>
            <span>·</span>
            <a
              className="text-first-accent cursor-cell"
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
              rel="noopener noreferrer"
              target="_blank"
              onClick={setIsLinkClickedTrue}
            >
              {isLinkClicked ? (
                <span className="">👀</span>
              ) : (
                <span>SECRET SAUCE</span>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
