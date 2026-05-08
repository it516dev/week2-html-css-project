import Nav from "./Nav"

const Header = () => {
  return (
    <>
      <header>
        <div className="header-content">
            <h1>China Travel Blog</h1>

            <p className="intro">
                Discover ancient history, vibrant cities, 
                delicious food and unforgettable expience across China.
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
  )
}

export default Header