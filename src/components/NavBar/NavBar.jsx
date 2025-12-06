import React from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart, FaBars, FaRegUser } from "react-icons/fa";
import Logo from "../Logo";

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
          <li>
            <a href="#">Flowers</a>
          </li>
          <li>
            <a href="#">
              Trending{" "}
              <span role="img" aria-label="fire">
                <img src="/trending.svg" alt="trending icon" />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              Christmas Trees{" "}
              <span role="img" aria-label="tree">
                <img src="/tree.svg" alt="Chtistmas icon" />
              </span>
            </a>
          </li>
          <li>
            <a href="#">Gifts</a>
          </li>
          <li>
            <a href="#">
              Sale{" "}
              <span role="img" aria-label="sunflower">
                <img src="/sunflower.svg" alt="sunflower icon" />
              </span>
            </a>
          </li>
          <li>
            <a href="#">Luxury</a>
          </li>
          <li>
            <a href="#">Letterbox Flowers</a>
          </li>
          <li>
            <a href="#">Plants</a>
          </li>
          <li>
            <a href="#">
              Gift Card{" "}
              <span role="img" aria-label="gift">
                <img src="/giftcard.svg" alt="giftcard icon" />
              </span>
            </a>
          </li>
          <li>
            <a href="#">Funeral</a>
          </li>
          <li>
            <a href="#">Wedding & Events</a>
          </li>
          <li>
            <a href="#">School</a>
          </li>
        </ul>
      </div>

      <div className="navbar-center-logo">
        <Logo size={50} primary="#6F6F6E" />
      </div>

      <div className="navbar-right">
        <div className="cart-container">
          <FaShoppingCart size={22} className="cart-icon" />
          <span className="cart-badge">0</span>
        </div>

        <button className="icon-btn">
          <FaSearch size={22} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
