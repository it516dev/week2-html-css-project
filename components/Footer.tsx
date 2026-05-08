import Link from "next/link"

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-section">
                <p>&copy; 2026 China Travel Blog</p>
            </div>

            <div className="footer-section">
                <h4>Quick Links</h4>
                
                <div className="links">
                    <Link href="#about">About</Link>
                    <Link href="#destinations">Destinations</Link>
                    <Link href="#food">Food</Link>
                    <Link href="#tips">Tips</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>

            <div className="footer-section">
                <h4>Follow</h4>

                <div className="links">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">X</a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer