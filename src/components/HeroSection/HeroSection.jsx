import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import Logo from "../Logo";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("AUTUMN");

  const categories = [
    { name: "All Flowers", image: "/1.jpg" },
    { name: "Birthday", image: "/2.jpg" },
    { name: "Virtues Flowers", image: "/3.png" },
    { name: "Luxury", image: "/4.jpg" },
    { name: "Letterbox", image: "/autumn.jpg" },
    { name: "Sympathy", image: "/gifting.png" },
    { name: "All Flowers", image: "/autumn.jpg" },
    { name: "Birthday", image: "/gifting.png" },
    { name: "Virtues Flowers", image: "/christmas.png" },
    { name: "Luxury", image: "/saleflower.png" },
    { name: "Letterbox", image: "/autumn.jpg" },
    { name: "Sympathy", image: "/gifting.png" },
  ];

  const heroData = {
    AUTUMN: {
      id: "autumn",
      title: "Hand-Picked Flowers By Us, Perfect For You",
      buttonText: "All Flowers",
      bgColor: "#FFF0C8",
      btnColor: "#59670D",
      textColor: "#1E1E1E",
      image: "/autumn.jpg",
      logoTextColor: "#6F6F6E",
      logoColor: "#F599A7",
    },
    GIFTING: {
      id: "gifting",
      title: "Beautiful Gifts, Made With Love",
      buttonText: "Gift Collection",
      bgColor: "#FFC2B9",
      btnColor: "#262626",
      textColor: "#1E1E1E",
      image: "/gifting.png",
      logoTextColor: "#1E1E1E",
      logoColor: "#1E1E1E",
    },
    CHRISTMAS: {
      id: "christmas",
      title: "Christmas Blooms, Made For You",
      buttonText: "Christmas Collection",
      bgColor: "#2a3d20",
      btnColor: "#fff",
      textColor: "#FFFFFF",
      image: "/christmas.png",
      logoTextColor: "#FFFFFF",
      logoColor: "#F599A7",
    },
    "SALE FLOWERS": {
      id: "sale",
      title: "Stunning Flowers At Lower Prices",
      buttonText: "Sale Flowers",
      bgColor: "#d1603d",
      btnColor: "#fff",
      textColor: "#FFFFFF",
      image: "/saleflower.png",
      logoTextColor: "#FFFFFF",
      logoColor: "#F599A7",
    },
  };

  const tabs = Object.keys(heroData);
  const currentData = heroData[activeTab];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [tabs]);

  return (
    <>
      <div className="mobile-category-nav">
        {categories.map((cat, index) => (
          <div className="cat-item" key={index}>
            <div className="cat-img-wrapper">
              <img src={cat.image} alt={cat.name} />
            </div>
            <span className="cat-name">{cat.name}</span>
          </div>
        ))}
      </div>

      <div className="hero-wrapper">
        <div
          className="hero-left-panel"
          style={{
            backgroundColor: currentData.bgColor,
            color: currentData.textColor,
          }}
        >
          <div className="desktop-logo-wrapper">
            <Logo
              primary={currentData.logoTextColor}
              accent={currentData.logoColor}
            />
          </div>
          <div className="hero-content" key={activeTab}>
            <h1 className="hero-title">{currentData.title}</h1>
            <button
              className="hero-cta"
              style={{
                backgroundColor: currentData.btnColor,
                color: currentData.btnColor === "#fff" ? "#222" : "#fff",
              }}
            >
              {currentData.buttonText}
            </button>
            <p className="hero-footer-text">
              Order by 5pm for same day London* delivery <br />
              or by 3pm for next day delivery UK*
            </p>
          </div>
        </div>

        <div className="hero-right-panel">
          <img
            src={currentData.image}
            alt={activeTab}
            className="hero-image"
            key={activeTab + "-img"}
          />
          <div className="mobile-overlay"></div>

          <div className="hero-tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && <div className="progress-bar" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
