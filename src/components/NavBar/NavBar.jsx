import React from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaBars, FaRegUser } from "react-icons/fa";
import Logo from "../Logo";
import { MAIN_NAVIGATION } from "../../constants/navigation";

/**
 * NavBar component - Main navigation bar with logo and menu items
 * @returns {JSX.Element} NavBar component
 */
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <div className="mobile-toggles">
          <button className="icon-btn">
            <FaBars size={22} />
          </button>
          <button className="icon-btn">
            <FaRegUser size={20} />
          </button>
        </div>

        <ul className="desktop-links">
          {MAIN_NAVIGATION.map((item) => (
            <li key={item.id}>
              <a href={item.href}>
                {item.text}
                {item.icon && (
                  <span role="img" aria-label={item.iconAlt}>
                    <img src={item.icon} alt={item.iconAlt} />
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-center-logo">
        <Logo size={50} primary="#6F6F6E" />
      </div>

      <div className="navbar-right">
        <div className="cart-container">
          <FaShoppingCart size={22} className="cart-icon" />
          <span className="cart-badge">0</span>
          <span className="cart-badge-desktop">0</span>
        </div>

        <button className="icon-btn">
          <FaSearch size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
