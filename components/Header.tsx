import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header>
        <Image
          src="/china-hero.jpg"
          alt="China travel scenery"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
        />

        <div className="header-overlay" />

        <div className="header-content">
          <h1>China Travel Blog</h1>

          <p className="intro">
            Discover ancient history, vibrant cities,
            delicious food and unforgettable experience across China.
          </p>

          <a
            href="#destinations"
            className="cta-btn"
          >
            Explore Destinations
          </a>
        </div>
      </header>

      <Nav />
    </>
  );
};

export default Header;