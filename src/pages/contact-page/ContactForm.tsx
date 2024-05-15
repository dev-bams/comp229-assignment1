function ContactForm() {
  return (
    <div>
      <section className="contact-form-container">
        <div className="contact-form-section">
          <h2>Contact me</h2>
          <div className="right-contact-form">
            <form name="contact-me">
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
              <button className="submit-button-container">send message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
