import gsap from "gsap";
import React, { useEffect } from "react";
import { useRef } from "react";
import "../styles/components/how.scss";
const shares = [
  { percent: "25", stockType: "Equity" },
  { percent: "25", stockType: "options" },
  { percent: "25", stockType: "commodities" },
  { percent: "25", stockType: "penny stocks" },
];

const How = () => {
  const myLine = useRef();
  const sotck = useRef();
  useEffect(() => {
    gsap.fromTo(
      myLine.current,
      { x: "-200%" },
      {
        x: 0,
        ease: "circ.easeIn",
        duration: 0.8,
        scrollTrigger: {
          trigger: myLine.current,
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
    gsap.fromTo(
      ".container-share",
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
          trigger: ".container-share",
          toggleActions: "restart none none none",
          // end: "bottom 10%",
        },
      }
    );
  }, []);
  return (
    <div className="how-section">
      <div className="how-we-do-container">
        <div className="what-we-do-horizontal-line">
          <hr ref={myLine} />
          <div className="what-we-do-horizontal-line-sub-texts">
            <span className="what-we-do-section-name">
              About our Strategies
            </span>
            <span>02</span>
            <span>/03</span>
          </div>
        </div>
        <div className="how-row">
          <div className="how-left-div">
            <div className="how-title">How we handle your funds?</div>
            <div className="how-desc">
              your funds will be invested equally in these 4 segments
            </div>
          </div>
          <div className="how-right-div">
            {shares.map((item) => {
              return (
                <>
                  <div className="share-type-holder">
                    <div className="container-share" ref={sotck}>
                      <span className="share-percent">{item.percent}%</span>
                      <span className="share-name">{item.stockType}</span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;

//equity
//options
//comoditties
//penny stocks
//crypto
