import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthButton from "./AuthButton";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">

        <div className="nav-left">
          <Link href="/" className="brand">
            China Travel
          </Link>
        </div>

        
        <ul className="nav-links">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/#about">About</Link>
            </li>
            <li>
                <Link href="/#destinations">Destinations</Link>
            </li>
            <li>
                <Link href="/#weather">Weather</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <AuthButton />
        </div>

      </div>
    </nav>
  );
};

export default Nav;