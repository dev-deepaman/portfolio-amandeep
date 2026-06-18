import logo from "../assets/logo-light.png";
import { menuItems } from "../data/menu";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <ul className="nav-links">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>

      <button className="hire-btn">Hire Me</button>
    </nav>
  );
}

export default Navbar;
