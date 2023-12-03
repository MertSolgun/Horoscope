import Logo from "../Navbar/logo-2.png";
import "./Navbar.scss";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav>
      <div className="nav-item">
        <img src={Logo} alt="" width={"100px"} />
        <ul className="desktopMenu">
          <li>
            <a href="#horoscope">HOROSCOPE</a>
          </li>
          <li>
            <a href="#daily">DAILY</a>
          </li>
          <li>
            <a href="#tarot">TAROT</a>
          </li>
          <li>
            <a href="#ARTICLE">ARTICLE</a>
          </li>
          <li>
            <a href="#CONTACT">CONTACT</a>
          </li>
        </ul>
        <i
          className="fa-solid fa-bars"
          id="bars"
          onClick={toggleMobileMenu}
        ></i>
        <ul className={`mobilMenu ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#horoscope">HOROSCOPE</a>
          </li>
          <li>
            <a href="#daily">DAILY</a>
          </li>
          <li>
            <a href="#tarot">TAROT</a>
          </li>
          <li>
            <a href="#ARTICLE">ARTICLE</a>
          </li>
          <li>
            <a href="#CONTACT">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
