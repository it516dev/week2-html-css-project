import React, { useState } from 'react'

const ContactForm = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !phone || !email || !message) {
      setFeedback("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setFeedback("Enter a valid email.");
      return;
    }

    if (phone.length < 10) {
      setFeedback("Enter a valid phone number.");
      return;
    }

    setFeedback("Message sent successfully!");

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Send Message</button>

        <p
          className={
            feedback.includes("success")
              ? "success"
              : "error"
          }
        >
          {feedback}
        </p>
      </form>
  );
}

export default ContactForm