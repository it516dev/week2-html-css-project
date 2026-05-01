"use client";

export default function ContactForm() {
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const msg = form.querySelector("#msg") as HTMLParagraphElement;

    const name = (form.querySelector("#name") as HTMLInputElement).value.trim();
    const phone = (form.querySelector("#phone") as HTMLInputElement).value.trim();
    const email = (form.querySelector("#email") as HTMLInputElement).value.trim();
    const message = (form.querySelector("#message") as HTMLTextAreaElement).value.trim();

    if (!name || !phone || !email || !message) {
        msg.textContent = "All fields are required.";
        msg.className = "error";
        return;
    }

    if (!email.includes("@")) {
        msg.textContent = "Enter a valid email.";
        msg.className = "error";
        return;
    }

    if (phone.length < 10) {
        msg.textContent = "Enter a valid phone number.";
        msg.className = "error";
        return;
    }

    msg.textContent = "Message sent successfully!";
    msg.className = "success";
    form.reset();
    };

  return (
    <form id="form" className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input id="name" type="text" placeholder="Enter your full name" required />

      <label htmlFor="phone">Phone Number</label>
      <input id="phone" type="tel" placeholder="Enter phone number" required />

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" placeholder="Enter your email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" placeholder="Write your message..." rows={4} required />

      <button type="submit">Send Message</button>
      <p id="msg" role="alert"></p>
    </form>
  );
}