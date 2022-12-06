import React from "react";
import "./styles/App.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cases from "./components/Cases";
import IntroOverlay from "./components/IntroOverlay";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { useEffect, useRef } from "react";
import Whatwedo from "./components/Whatwedo";
import Risk from "./components/Risk";
gsap.registerPlugin(CSSRulePlugin);
function App() {
  const headlines = useRef(null);
  const myBackground = useRef(null);
  useEffect(() => {
    let vh = window;
    gsap.registerPlugin(ScrollTrigger);
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
      .to(".my-background-image", {
        css: { visibility: "visible" },
        duration: 0,
      })
      .to(".background-cover", {
        duration: 1.4,
        width: "0vw",
        // scaleX: 0,
        ease: Power2.easeInOut,
      })
      .to(".intro-overlay", {
        css: { display: "none" },
      })
      .fromTo(
        ".my-background-image img",
        {
          scale: 1.4,
        },
        {
          scale: 1,
          delay: -2,
          duration: 1.5,
          ease: "expo.inOut",
        }
      );
  }, []);
  useEffect(() => {
    // console.log(imageReveal);
  }, []);
  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner headlines={headlines} myBackground={myBackground} />
      <Whatwedo />
      <Risk />
    </div>
  );
}

export default App;
