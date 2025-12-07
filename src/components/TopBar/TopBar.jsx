import React, { useState, useEffect } from 'react';
import './TopBar.css';
import { FaInstagram, FaFacebookF, FaPinterest, FaLinkedinIn  } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaPhoneVolume } from 'react-icons/fa6';

const TopBar = () => {
  const messages = [
    "We deliver the same day in London, even on Sundays",
    "Free shipping on all orders over $50",
    "Sign up to our newsletter for 10% off",
    "Visit our new store in Oxford Street"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsVisible(true);
      }, 500);

    }, 3000);

    return () => clearInterval(intervalId);
  }, [messages.length]);

  return (
    <div className="top-bar-container">
      <div className="top-bar-left">
        <a href="#" className="icon-link"><FaInstagram /></a>
        <a href="#" className="icon-link"><FaFacebookF /></a>
        <a href="#" className="icon-link"><FaPinterest /></a>
        <a href="#" className="icon-link"><FaPhoneVolume /></a>
        <a href="#" className="icon-link"><FaLinkedinIn /></a>
        <a href="#" className="icon-link"><IoIosMail size={23}  /></a>
      </div>

      <div className="top-bar-center">
        <span className={`dynamic-text ${isVisible ? 'fade-in' : 'fade-out'}`}>
          {messages[currentIndex]}
        </span>
      </div>

      <div className="top-bar-right">
        <a href="#">Delivery</a>
        <span className="separator">|</span>
        <a href="#">Find A Store</a>
        <span className="separator">|</span>
        <a href="#">FAQs</a>
        <span className="separator">|</span>
        <a href="#">Sign in</a>
      </div>
    </div>
  );
};

export default TopBar;