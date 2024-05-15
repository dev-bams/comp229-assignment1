function ContactForm() {
  return (
    <div className=" flex justify-center transition-colors duration-300 bg-first-primary">
      <section className="contact-form-container">
        <div className="contact-form-section">
          <div className="right-contact-form">
            <form name="contact-me" className="flex justify-center" action="/">
              <input type="text" placeholder="Name" name="name" required />
              <input type="email" placeholder="Email" name="email" />
              <input
                type="text"
                placeholder="subject"
                name="subject"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <button className="border p-4 text-white rounded-lg cursor-cell">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
