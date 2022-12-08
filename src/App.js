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
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import {
  Route,
  Routes,
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";
gsap.registerPlugin(CSSRulePlugin);
function App() {
  // const location = useLocation();
  useEffect(() => {
    // console.log(imageReveal);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about" element={<Home />} /> */}
        <Route exact path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
