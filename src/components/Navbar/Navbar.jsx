import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        <div className="logo">
          Transit<span> Connect</span>
        </div>

        <nav className="nav-links">
          <a href="#hero" className={active === "hero" ? "active" : ""}>
            Başlangıç
          </a>

          <a href="#story" className={active === "story" ? "active" : ""}>
            Hikaye
          </a>

          <a href="#features" className={active === "features" ? "active" : ""}>
            Özellikler
          </a>

          <a href="#gallery" className={active === "gallery" ? "active" : ""}>
            Galeri
          </a>

          <a href="#video" className={active === "video" ? "active" : ""}>
            Video
          </a>

          <a href="#contact" className={active === "contact" ? "active" : ""}>
            İletişim
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;