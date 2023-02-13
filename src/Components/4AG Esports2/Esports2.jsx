import { Component } from "react";
import "./Esports2.scss";
class Esports2 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Esports2-Container">
        <img
          src="/Images/Esports2Image.png"
          alt="Esports2 image"
          className="Esports2-Container__Image"
        />
        <h2 className="Esports2-Container__Para">Best Play</h2>
        <div className="Esports2-Container__BLack-div"></div>
        <p className="Esports2-Container__Chicken-dinner">Chicken Dinner</p>
        <div className="Esports2-Container__Prize-container">
          <p className="Esports2-Container__Prize">Prize:RS 50000</p>
        </div>
      </div>
    );
  }
}
export default Esports2;
