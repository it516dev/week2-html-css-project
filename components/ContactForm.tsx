import { createMessage } from "@/app/actions";

const ContactForm = () => {
  return (
    <form action={createMessage} className="contact-form">

      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Enter your full name"
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Enter phone number"
        required
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Write your message..."
        required
      />

      <button type="submit">Send Message</button>

    </form>
  );
};

export default ContactForm;