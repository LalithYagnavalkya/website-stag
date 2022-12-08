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
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Pricing from "./pages/Pricing";
gsap.registerPlugin(CSSRulePlugin);
function App() {
  // const location = useLocation();
  useEffect(() => {
    // console.log(imageReveal);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<Home />} /> */}
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
