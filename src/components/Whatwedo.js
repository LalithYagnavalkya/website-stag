import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { useRef } from "react";
import "../styles/components/Whatwedo.scss";

gsap.registerPlugin(ScrollTrigger);
const Whatwedo = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [350, -150]);

  const myLine = useRef();
  const sentence = useRef();
  useEffect(() => {
    gsap.fromTo(
      myLine.current,
      { x: "-200%" },
      {
        x: 0,
        ease: "circ.easeIn",
        duration: 0.8,
        scrollTrigger: {
          trigger: "sentence",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
    gsap.fromTo(
      ".sentence div",
      {
        y: 200,
        skewY: 7,
      },
      {
        duration: 1.8,
        ease: "power4.out",
        y: 0,
        skewY: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".sentence",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);

  return (
    <div className="what-we-do-main">
      <section className="what-we-do-container" id='what-we-do-container-section'>
        <div className="what-we-do-horizontal-line">
          <hr ref={myLine} />
          <div className="what-we-do-horizontal-line-sub-texts">
            <span className="what-we-do-section-name">what we do?</span>
            <span>01</span>
            <span>/03</span>
          </div>
        </div>
        <div className="what-we-do-row">
          <div className="what-we-do-big-text">
            <div className="sentence">
              <div>We Are a Global</div>
            </div>
            <div className="sentence">
              <div> Crypto Trading and</div>
            </div>
            <div className="sentence">
              <div>Investment Firm,</div>
            </div>
            <div className="sentence">
              <div> Driving Long and </div>
            </div>
            <div className="sentence">
              <div> Short Term </div>
            </div>
            <div className="sentence">
              <div> Sustainable Returns</div>
            </div>
          </div>
          <div className="what-we-do-small-text">
            The Krypto Knight assists clients with multiple interactive services
            into the huge untapped market with a recipe to success. Our methods
            have been tried and tested by major expert analysts and investors,
            approving our successful formula with professional background
            credibility, The Krypto Knight is here to ensure that your financial
            present and future are on the path to success.
          </div>
        </div>
        <motion.div className="what-we-do-slide-text" style={{ x }}>
          Invest Better
        </motion.div>
      </section>
    </div>
  );
};

export default Whatwedo;
