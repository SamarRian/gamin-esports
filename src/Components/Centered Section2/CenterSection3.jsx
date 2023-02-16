import { Component } from "react";
import "./CenterSection3.scss";
class CenterSection3 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Main-Container2">
        <img
          src="/images/GodofWar.webp"
          alt="image1"
          className="Main-Container2__image1"
        />
        <img
          src="/images/callofduty.jpg"
          alt="image1"
          className="Main-Container2__image2"
        />
        <img
          src="/images/Fortinte.jpg"
          alt="image1"
          className="Main-Container2__image3"
        />
      </div>
    );
  }
}
export default CenterSection3;
