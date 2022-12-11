import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "../styles/components/header.scss";
const Header = ({ togglePricingPage }) => {
  const [isNav, toggleNav] = useState(false);
  const navigation = useNavigate();

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <img src="/logo.svg" alt="" />
            <Link>Stag Investments.</Link>
          </div>
          <div className="nav-for-phone" onClick={() => toggleNav(!isNav)}>
            <span></span>
            <span></span>
          </div>
          {isNav && (
            <div className="nav-settn">
              <div className="nav-peak"></div>
              <>
                {/* <div className="nav-setting-header">back</div> */}
                <div className="nav-setting-pages">
                  <span>About</span>
                  <span
                    onClick={() => {
                      togglePricingPage(true);
                      toggleNav(false);
                    }}
                  >
                    pricing
                  </span>
                  <Link
                    className="contact-btn"
                    to="contact-section-page"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <span onClick={() => toggleNav(false)}>contact us</span>
                  </Link>
                </div>
              </>
            </div>
          )}
          <div className="nav">
            <span className="contact-btn">About</span>
            <Link
              className="contact-btn"
              to="contact-section-page"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span>Contact us</span>
            </Link>
            <div className="price-btn" onClick={() => togglePricingPage(true)}>
              <span>Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
