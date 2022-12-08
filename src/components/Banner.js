import React, { useEffect } from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import "../styles/components/banner.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Banner = ({ headlines, myBackground }) => {
  let rule1 = CSSRulePlugin.getRule(".my-background-image:after");
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <section className="main">
      <div ref={myBackground} className="container">
        <div className="row">
          <h2>
            <div className="line">
              <div ref={headlines}>Sit back and relax, while we make</div>
            </div>
            <div className="line">
              <div ref={headlines}>profits for you</div>
            </div>
          </h2>
          <>
            <div className="background-cover"></div>
            <div className="my-background-image">
              <img
                className="invest-img"
                src={require(`../assets/bull.jpg`)}
                alt="stock market"
              />
            </div>
          </>

          <div className="btn-row">
            <a href="/pricing">
              Look at our pricing <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
