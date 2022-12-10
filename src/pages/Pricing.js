import React, { useEffect } from "react";
import "../styles/Pricing.scss";

const option1 = [
  "8 hours usage of our coworking space",
  "Access to All our rooms",
];
const option2 = [
  "8 hours usage of our coworking space",
  "Access to All our rooms",
  "Dedicated Desk",
  "Free Business Address",
  "Free Lunch 1x a day",
];
const Pricing = () => {
  useEffect(() => {
    console.log("pricning");
  }, []);

  return (
    <div className="pricing-page">
      <div className="pricing-header">back</div>
      <div className="cards-holder">
        <div className="pricing-card">
          <div className="pricing-card-title">
            Earn more
            <br />
            <span>with Goodplans</span>
          </div>
          <div className="pricing-card-main-description">
            Choose a plan and get onboard in minutes. Then get $100 credits for
            your next payment.
            <span>
              <img src="/right-arrow.svg" alt="" srcset="" />
            </span>
          </div>
          <div className="pricing-logo">
            <img src="/logo.svg" alt="" srcset="" />
          </div>
        </div>
        <div className="pricing-card-white">
          <div className="pricing-card-white-title">
            <img src="/logo-white.svg" alt="" />
            <span>Day Pass</span>
          </div>
          <div className="pricing-card-white-description">
            <span className="half-gray">What You'll Get</span>
            {option1.map((perks) => {
              return (
                <>
                  {" "}
                  <span className="point">
                    <img src="/tick.svg" alt="" />
                    <span>{perks}</span>
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="pricing-card-white">
          <div className="pricing-card-white-title">
            <img src="/logo-white.svg" alt="" />
            <span>Day Pass</span>
          </div>
          <div className="pricing-card-white-description">
            <span className="half-gray">What You'll Get</span>
            {option2.map((perks) => {
              return (
                <>
                  {" "}
                  <span className="point">
                    <img src="/tick.svg" alt="" />
                    <span>{perks}</span>
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
