import Contact from "./Contact";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <div
      className="flex flex-col relative bg-second-primary dark:bg-first-primary items-center justify-center"
      style={{ minHeight: "calc( 100vh - 88px )" }}
    >
      <Contact />
      <ContactForm />
    </div>
  );
}

export default ContactPage;
