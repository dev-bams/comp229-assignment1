function ContactSection() {
  return (
    <div
      className="flex justify-center dark:bg-first-primary bg-second-primary transition-colors duration-300"
      id="contact"
    >
      <div className="max-w-7xl w-full p-4 flex flex-col dark:text-second-accent text-second-text-color transition-colors duration-300">
        <div className="flex justify-center items-center flex-col gap-2 ">
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
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
