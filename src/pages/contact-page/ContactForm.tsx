/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

// Component for the contact form
function ContactForm() {
  return (
    // Container div for the contact form with background color transition
    <div className="flex justify-center transition-colors duration-300 bg-first-primary">
      <section className="contact-form-container">
        <div className="contact-form-section">
          <div className="right-contact-form">
            {/* Form for contacting with inputs for name, email, subject, and message */}
            <form name="contact-me" className="flex justify-center" action="/">
              <input type="text" placeholder="Name" name="name" required />{" "}
              {/* Input for name */}
              <input type="email" placeholder="Email" name="email" />{" "}
              {/* Input for email */}
              <input
                type="text"
                placeholder="subject"
                name="subject"
                required
              />{" "}
              {/* Input for subject */}
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>{" "}
              {/* Textarea for message */}
              <button className="border p-4 text-white rounded-lg cursor-cell">
                Send message {/* Button to send the message */}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm; // Export the ContactForm component as the default export
