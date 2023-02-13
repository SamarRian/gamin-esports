import React from "react";
import "./Esports.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
const Esports = () => {
  return (
    <div>
      <hr className="Seprated-Row" />
      <div className="Esports-Container">
        <p className="Esports-Container__4Agesports">BACK TO 4AG ESPORTS</p>
        <h1 className="Esports-Container__Heading">4AG ESPORTS</h1>
        <h6 className="Esports-Container__Heading2">for electronic sports</h6>
        <img
          src="/images/EsportsImage3.jpg"
          alt="Esports-image"
          className="Esports-Container__EsportsImage"
        />
        <a href="#fakeLink" className="btn gray">Select our Game</a>
        <a href="#fakeLink" className="btn orange">Register Team  <AiOutlineArrowRight className="Esports-Container__Arrow" /></a>
      </div>
    
    </div>
  );
};

export default Esports;
