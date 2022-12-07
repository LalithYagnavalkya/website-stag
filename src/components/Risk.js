import React from "react";
import books from "../assets/books_AdobeExpress 1.mp4";
import map from "../assets/mapHD_AdobeExpress.mp4";
import "../styles/components/Risk.scss";
import Contact from "./Contact";
const Risk = () => {
  return (
    <div className="risk-container">
      <div className="risk-horizontal-line">
        <span></span>
      </div>
      <div className="risk-row">
        <div className="background-video">
          <video
            src={books}
            autoPlay
            loop
            muted
            resizeMode="cover"
            repeat={true}
            playWhenInactive={true}
          />
        </div>
        <div className="risk-disclo">
          <div className="risk-disclo-head">Risk Disclousre</div>
          <p>
            Trading involves substantial risk and is not for every investor.
            Risk capital is money that can be lost without jeopardizing ones’
            financial security or lifestyle. Only risk capital should be used
            for trading and only those with sufficient risk capital should
            consider trading.The Krypto Knight offers general trading advice
            that does not take into consideration your own trading experiences,
            personal objectives and goals, financial means, or risk tolerance.
            Past performance is not necessarily indicative of future results.
          </p>
        </div>
      </div>
      <div className="risk-row-2">
        <div className="risk-content">
          <div className="risk-content-text">
            We are looking for Crypto Analysts and Block Chain experts having 2
            years of experience.
          </div>
        </div>
        <div className="background-video map">
          <video
            src={map}
            autoPlay
            loop
            muted
            resizeMode="cover"
            repeat={true}
            playWhenInactive={true}
          />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Risk;
