import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css"; // تأكد من وجود ملف الـ CSS
import  logo  from "../assets/images/Logo.png";

export default function Navbar() {
  const location = useLocation();

  useEffect(() => {
    const toggleBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (toggleBtn && navLinks) {
      const toggleHandler = () => {
        navLinks.classList.toggle("show");
      };

      toggleBtn.addEventListener("click", toggleHandler);

      return () => {
        toggleBtn.removeEventListener("click", toggleHandler);
      };
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* ✅ Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            <img src={logo} alt="Logo" />
          </div>
          <span className="logo-text">SquareUp</span>
        </Link>

        {/* ✅ Hamburger Menu Button (Mobile) */}
        <button
          className="menu-toggle"
          id="menu-toggle"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ✅ Navigation Links */}
        <ul className="buttons-container" id="nav-links">
          <li>
            <Link
              to="/"
              className={location.pathname.includes("Home") ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Services"
              className={location.pathname.includes("Services") ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/works"
              className={location.pathname.includes("works") ? "active" : ""}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/Process"
              className={location.pathname.includes("Process") ? "active" : ""}
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className={location.pathname.includes("About") ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className={location.pathname.includes("careers") ? "active" : ""}
            >
              Careers
            </Link>
          </li>
        </ul>

        {/* ✅ CTA Button */}
        <Link to="/contact" className="cta-button">
          Contact
        </Link>
      </div>
    </nav>
  );
}
