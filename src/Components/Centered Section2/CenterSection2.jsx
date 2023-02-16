import { Component } from "react";
import "./CenterSection2.scss";
class CenterSection2 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Main-Container">
        <img
          src="/images/GodofWar.webp"
          alt="image1"
          className="Main-Container__image1"
        />
        <img
          src="/images/callofduty.jpg"
          alt="image1"
          className="Main-Container__image2"
        />
        <img
          src="/images/Fortinte.jpg"
          alt="image1"
          className="Main-Container__image3"
        />
      </div>
    );
  }
}
export default CenterSection2;
