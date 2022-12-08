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
import Contact from "./components/Contact";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";
gsap.registerPlugin(CSSRulePlugin);
function App() {
  const location = useLocation();
  useEffect(() => {
    // console.log(imageReveal);
  }, []);
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Home />
      </Routes>
    </div>
  );
}

export default App;
