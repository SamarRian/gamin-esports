import { Component } from "react";
import "./CenterSection1.scss";
class CenterSection1 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Main-container">
        <div className="Main-container__1">
          <img
            src="/images/codimage.webp"
            alt=""
            className="Main-container__1--image"
          />
          <div className="Main-container__1--div1">
            <h2 className="Main-container__1--para-div--heading">
              Recomended Mobile Games
            </h2>
            <p className="Main-container__1--para-div--para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aspernatu
            </p>
          </div>
        </div>
        <div className="Main-container__2">
            <div className="Main-container__2--div2">
          <h2 className="Main-container__2--heading2">4AG Members</h2>
          <p className="Main-container__2--para2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aspernatu</p>
              </div>
          <div className="Main-container__2--circle1"></div>
          <div className="Main-container__2--circle2"></div>
        </div>
         <img src="/images/samarimage.jpg" alt="person image" className="Main-container__Person-Image"/>
      </div>
    );
  }
}
export default CenterSection1;
