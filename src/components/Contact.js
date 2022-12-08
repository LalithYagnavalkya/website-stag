import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import "../styles/components/contact.scss";
const Contact = () => {
  const myLine = useRef();

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
  }, []);
  return (
    <div className="contact-container">
      <div className="contact-container-horizontal-line">
        <hr ref={myLine} />
      </div>
      <div className="contact-container-content">
        <>
          <div className="contact-container-title">
            <span>Get in touch</span>
          </div>
          <div className="contact-container-row">
            <div className="contact-container-your-name contact-feild">
              <span>Your name</span>
              <div className="rectangle">
                <input type="text" />
              </div>
            </div>
            <div className="contact-container-your-email contact-feild">
              <span>Your email</span>
              <div className="rectangle">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="contact-container-row">
            <div className="contact-container-your-number contact-feild">
              <span>Your phone number</span>
              <div className="rectangle">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="contact-container-row">
            <div className="contact-container-your-message">
              <span>Message</span>
              <div className="rectangle">
                <textarea name="" id=""></textarea>
              </div>
            </div>
          </div>
        </>
        <div className="contact-container-submit-btn">
          <span>just send</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
