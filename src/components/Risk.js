import gsap from "gsap";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import books from "../assets/books_AdobeExpress 1.mp4";
import map from "../assets/tree.mp4";
import "../styles/components/Risk.scss";
import Contact from "./Contact";
const Risk = () => {
  useEffect(() => {
    gsap.fromTo(
      ".sentence div",
      {
        y: 200,
        skewY: 7,
      },
      {
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3,
        y: 0,
        skewY: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".risk-row-2",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);

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
            <div className="sentence">
              <div>We are looking for Crypto</div>
            </div>
            <div className="sentence">
              <div>Analysts and Block Chain</div>
            </div>
            <div className="sentence">
              <div>experts having 2 years of</div>
            </div>
            <div className="sentence">
              <div>experience.</div>
            </div>
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
