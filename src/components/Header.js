import React from "react";
import "../styles/components/header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <img src="/logo.svg" alt="" />
            <a href="/">Stag Investments.</a>
          </div>
          <div className="nav">
            <span className="contact-btn">Contact us</span>
            <div className="price-btn">
              <span>Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
