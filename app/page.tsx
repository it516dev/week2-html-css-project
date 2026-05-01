import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>China Travel Blog</h1>
          <p className="intro">
            Discover ancient history, vibrant cities, delicious food and unforgettable experiences across China.
          </p>
          <a href="#destinations" className="cta-btn">Explore Destinations</a>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#food">Food</a></li>
          <li><a href="#tips">Tips</a></li>
          <li><Link href="/contact">Contact</Link></li>
          <ThemeToggle />
        </ul>
      </nav>

      <main>
        <section id="about">
          <h2>About China</h2>
          <p>
            China is one of the oldest civilizations in the world with over 5,000 years of history. It is a huge country with many different landscapes, cultures and languages. I have always wanted to visit China because of its history and food.
          </p>
        </section>

        <section id="destinations">
          <h2>Top Destinations</h2>
          <ul>
            <li><strong>Beijing</strong> - Home of the Great Wall and the Forbidden City.</li>
            <li><strong>Shanghai</strong> - A modern city with a famous waterfront called the Bund.</li>
            <li><strong>Chengdu</strong> - Known for giant pandas and spicy food.</li>
            <li><strong>Xian</strong> - Where you can see the famous Terracotta Army.</li>
          </ul>
        </section>

      <section id="food">
        <h2>Chinese Food</h2>
        <p>Chinese food is very popular all over the world. Some dishes I want to try are:</p>
        <ul>
          <li>Peking Duck</li>
          <li>Dumplings (Dim Sum)</li>
          <li>Fried Rice</li>
          <li>Hot Pot</li>
        </ul>
      </section>

      <section id="tips">
        <h2>Travel Tips</h2>
        <p>If you are planning to visit China, here are a few things to keep in mind:</p>
        <ul>
          <li>You will need a visa before you travel.</li>
          <li>The currency is the Chinese Yuan (CNY).</li>
          <li>The best time to visit is spring or autumn.</li>
          <li>Google and social media are blocked, so bring a VPN.</li>
        </ul>
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
              <Link href="/contact">Contact</Link>
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