import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Pricing.scss";

const option1 = ["Trade calls", ""];
const option2 = [
  "8 hours usage of our coworking space",
  "Access to All our rooms",
  "Dedicated Desk",
  "Free Business Address",
  "Free Lunch 1x a day",
];
const option3 = ["Trade calls"];
const prices = [
  {
    name: "VIP",
    perks: ["Added to a private VIP group where trade signals will be posted"],
    price: 49,
    valid: "month",

    duriation: "valid for one month",
  },
  {
    name: "6 months",
    perks: [
      "Added to three premium private groups where we provide Trade calls",
      "Swing and scalp trade signals with 20% to 40% minimum Profit",
      "Strong TA and FA signals will be posted in premium channel",
      "Insider News",
      "Gem coins with 10x to 50x potential",
      "Perfect Entry and Exit signals with stop loss",
      "Professional support 24x7",
    ],
    price: 149,
    valid: "6 months",
    duriation: "valid for 6 months",
  },
  {
    name: "1 Year",
    perks: [
      "Added to three premium private groups where we provide Trade calls",
      "Swing and scalp trade signals with 20% to 40% minimum Profit",
      "Strong TA and FA signals will be posted in premium channel",
      "Insider News",
      "Gem coins with 10x to 50x potential",
      "Perfect Entry and Exit signals with stop loss",
      "Professional support 24x7",
      "Bi-weekly Google meet sessions and 1 on 1 Q&A if necessary",
      "Technical analysis ebook",
      "45 days money back policy",
    ],
    price: 249,
    valid: "1 year",

    duriation: "valid for year",
  },
];
const Pricing = ({ togglePricingPage }) => {
  const navigation = useNavigate();
  useEffect(() => {
    console.log("pricning");
  }, []);

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <span onClick={() => togglePricingPage(false)}>back</span>
      </div>
      <div className="cards-holder">
        {/* <div className="pricing-card">
          <div className="pricing-card-title">
            Earn more
            <br />
            <span>with Goodplans</span>
          </div>
          <div className="pricing-card-main-description">
            Choose a plan and get onboard in minutes.
            <span>
              <img src="/right-arrow.svg" alt="" srcset="" />
            </span>
          </div>
          <div className="pricing-logo">
            <img src="/logo.svg" alt="" srcset="" />
          </div>
        </div> */}

        {prices.map((item) => {
          return (
            <>
              <div className="pricing-card-white">
                <div className="pricing-card-white-title">
                  <img src="/logo-white.svg" alt="" />
                  <span>{item.name}</span>
                </div>
                <div className="pricing-card-white-description">
                  <span className="half-gray">What You'll Get</span>
                  {item.perks.map((perks) => {
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
                <div className="pricing-amount-section">
                  <div className="option-amount">
                    <span>${item.price}</span>/{item.valid}
                  </div>
                  <div className="pricing-choose-btn">choose</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
