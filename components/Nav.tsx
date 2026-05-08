import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

const Nav = () => {
  return (
    <nav>
        <ul>
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
                <Link href="/#food">Food</Link>
            </li>

            <li>
                <Link href="/#tips">Tips</Link>
            </li>

            <li>
                <Link href="/contact">Contact</Link>
            </li>

            <li>
                <ThemeToggle />
            </li>
        </ul>
    </nav>
  );
};

export default Nav