import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");

    const onScroll = () => {
      let current = "hero";

      sections.forEach((section) => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">

          <div className="logo">
            Transit<span> Connect</span>
          </div>

          {/* Hamburger */}
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

            <a href="#hero" onClick={() => setMenuOpen(false)}
              className={active === "hero" ? "active" : ""}>
              Başlangıç
            </a>

            <a href="#story" onClick={() => setMenuOpen(false)}
              className={active === "story" ? "active" : ""}>
              Hikaye
            </a>

            <a href="#features" onClick={() => setMenuOpen(false)}
              className={active === "features" ? "active" : ""}>
              Özellikler
            </a>

            <a href="#gallery" onClick={() => setMenuOpen(false)}
              className={active === "gallery" ? "active" : ""}>
              Galeri
            </a>

            <a href="#video" onClick={() => setMenuOpen(false)}
              className={active === "video" ? "active" : ""}>
              Video
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}
              className={active === "contact" ? "active" : ""}>
              İletişim
            </a>

          </nav>

        </div>
      </header>
    </>
  );
};

export default Navbar;