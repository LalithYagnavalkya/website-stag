import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <img src="/logo.svg" alt="" />
            <Link href="/">Stag Investments.</Link>
          </div>
          <div className="nav">
            <span className="contact-btn">About</span>
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
