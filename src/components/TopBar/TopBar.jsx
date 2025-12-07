import React from "react";
import "./TopBar.css";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import {
  PROMOTIONAL_MESSAGES,
  MESSAGE_ROTATION_INTERVAL,
  MESSAGE_FADE_DURATION,
} from "../../constants/messages";
import { SOCIAL_LINKS, TOP_BAR_LINKS } from "../../constants/navigation";
import { useRotatingContent } from "../../hooks";

/**
 * TopBar component - Displays social links, promotional messages, and utility navigation
 * @returns {JSX.Element} TopBar component
 */
const TopBar = () => {
  const { currentItem: currentMessage, isVisible } = useRotatingContent(
    PROMOTIONAL_MESSAGES,
    MESSAGE_ROTATION_INTERVAL,
    MESSAGE_FADE_DURATION
  );

  return (
    <div className="top-bar-container">
      <div className="top-bar-left">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="icon-link"
            aria-label={link.ariaLabel}
          >
            {link.id === "instagram" && <FaInstagram />}
            {link.id === "facebook" && <FaFacebookF />}
            {link.id === "pinterest" && <FaPinterest />}
            {link.id === "phone" && <FaPhoneVolume />}
            {link.id === "linkedin" && <FaLinkedinIn />}
            {link.id === "email" && <IoIosMail size={link.size} />}
          </a>
        ))}
      </div>

      <div className="top-bar-center">
        <span className={`dynamic-text ${isVisible ? "fade-in" : "fade-out"}`}>
          {currentMessage}
        </span>
      </div>

      <div className="top-bar-right">
        {TOP_BAR_LINKS.map((link, index) => (
          <React.Fragment key={link.id}>
            <a href={link.href}>{link.text}</a>
            {index < TOP_BAR_LINKS.length - 1 && (
              <span className="separator">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
