import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "../styles/components/header.scss";
const Header = () => {
  const navigation = useNavigate();

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <img src="/logo.svg" alt="" />
            <Link>Stag Investments.</Link>
          </div>
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
            <div className="price-btn">
              <span onClick={() => navigation("/pricing")}>Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
