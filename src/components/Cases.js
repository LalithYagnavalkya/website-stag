import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";
import "../styles/components/cases.scss";

const caseStudies = [
  {
    id: 1,
    subtitle: "Invest in Your Future",
    title: "We Are a Global Crypto Trading and Investment Firm, ",
    img: "invest",
  },
  {
    id: 2,
    subtitle: "Our Investment Strategies",
    title: "The Krypto Knight assists clients with multiple i ",
    img: "office",
  },
  {
    id: 3,
    subtitle: "Work With Us",
    title: "We are looking for trader ",
    img: "hire",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${caseItem.img}.jpg`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
