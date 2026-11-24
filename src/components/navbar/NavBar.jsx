import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "../brand/BrandLogo.jsx";
import "./navbar.css";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Journey", "#journey"],
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <BrandLogo />
          <span className="logo-copy">Herbert Ofori<small>Phori-Tech</small></span>
        </a>

        <button
          className="nav-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={`nav-links${menuOpen ? " nav-links-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a href={href} key={label} onClick={closeMenu}>{label}</a>
          ))}
        </nav>

        <a className="nav-btn" href="#contact">Let’s talk</a>
      </div>
    </header>
  );
}

export default NavBar;
