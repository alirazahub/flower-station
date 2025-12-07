import React from "react";
import "./HeroSection.css";
import Logo from "../Logo";
import { CATEGORIES } from "../../constants/navigation";
import {
  HERO_SECTIONS,
  HERO_TABS,
  HERO_AUTO_ROTATE_INTERVAL,
} from "../../constants/heroData";
import { getButtonTextColor } from "../../utils/helpers";
import { useTabRotation } from "../../hooks";

/**
 * HeroSection component - Main hero section with rotating content and categories
 * @returns {JSX.Element} HeroSection component
 */
const HeroSection = () => {
  const { activeTab, setActiveTab } = useTabRotation(
    HERO_TABS,
    HERO_AUTO_ROTATE_INTERVAL
  );

  const currentData = HERO_SECTIONS[activeTab];

  return (
    <>
      <div className="mobile-category-nav">
        {CATEGORIES.map((cat) => (
          <div className="cat-item" key={cat.id}>
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
                color: getButtonTextColor(currentData.btnColor),
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
            {HERO_TABS.map((tab) => (
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
