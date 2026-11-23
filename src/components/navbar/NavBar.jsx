import "./navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="/" className="logo">
            PHORI<span>TECH</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="nav-btn">
          Let's Talk
        </button>
      </div>
    </header>
  );
};

export default Navbar;