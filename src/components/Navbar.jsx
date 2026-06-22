import { useEffect, useState } from "react";
import logo from "../assets/logo-light.png";
import { menuItems } from "../data/menu";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              onClick={(e) => {
                e.preventDefault();

                setIsOpen(false);

                setTimeout(() => {
                  document.querySelector(item.link)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }, 300);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
        <button className="hire-btn mobile-hire-btn">Hire Me</button>
      </ul>

      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <button className="hire-btn desktop-hire-btn">Hire Me</button>
    </nav>
  );
}

export default Navbar;
