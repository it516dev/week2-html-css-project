"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>Contact Me</h1>
          <p className="intro">
            Have questions or want to share travel ideas? Send me a message.
          </p>
        </div>
      </header>

      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#destinations">Destinations</Link></li>
          <li><Link href="/#food">Food</Link></li>
          <li><Link href="/#tips">Tips</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>

      <main>
        <section>
          <ContactForm />
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <p>&copy; 2026 China Travel Blog</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="links">
              <Link href="/#about">About</Link>
              <Link href="/#destinations">Destinations</Link>
              <Link href="/#food">Food</Link>
              <Link href="/#tips">Tips</Link>
              <Link href="/">Home</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow</h4>
            <div className="links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}