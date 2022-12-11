import { AnimatePresence, motion } from "framer-motion";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroOverlay from "../components/IntroOverlay";
import Risk from "../components/Risk";
import Sebi from "../components/Sebi";
import Social from "../components/Social";
import Whatwedo from "../components/Whatwedo";
import "../styles/App.scss";
import Pricing from "./Pricing";

const Home = () => {
  const headlines = useRef(null);
  const myBackground = useRef(null);
  const [isPricingPageOpen, togglePricingPage] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let vh = window;
    const tl = gsap.timeline();
    gsap.to("body", { css: { visibility: "visible" }, duration: 0 });
    tl.fromTo(
      ".line div",
      {
        y: 200,

        skewY: 7,
      },
      {
        duration: 1.8,
        ease: "power4.out",
        delay: 1,
        y: 0,
        skewY: 0,
        stagger: 0.3,
      }
    )
      .to(".overlay-top", {
        height: 0,
        ease: "expo.inOut",
        duration: 1.3,
        stagger: 0.3,
      })
      .to("body", { css: { overflowY: "auto" }, duration: 0 })
      .to(".header", {
        css: { display: "inline" },
        duration: 0,
      })
      .to(".my-background-image", {
        css: { visibility: "visible" },
        duration: 0,
      })
      .to(".background-cover", {
        duration: 1.4,
        delay: 0,
        width: "0vw",
        // scaleX: 0,
        ease: Power2.easeInOut,
      })
      .fromTo(
        ".my-background-image img",
        {
          scale: 1.4,
        },
        {
          scale: 1,
          delay: -1.4,
          duration: 1.5,
          ease: "expo.inOut",
        }
      )
      .fromTo(".header", { y: -300 }, { y: 0, duration: 1.3, delay: -0.5 })
      .fromTo(
        ".social-icons",
        { x: 200 },
        { x: 0, duration: 1.3, delay: -1.2, stagger: 1 }
      )
      .to(".intro-overlay", {
        css: { display: "none" },
      });
  }, []);
  return (
    <div className="App" id="smooth-content">
      <AnimatePresence>
        <IntroOverlay />
        <Header togglePricingPage={togglePricingPage} />
        <Banner headlines={headlines} myBackground={myBackground} />
        <Whatwedo />
        <Risk />
        <Footer />
        <Social />
        <Sebi />
        {isPricingPageOpen && (
          <motion.div className="testing" initial={} animate={}>
            <Pricing togglePricingPage={togglePricingPage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
