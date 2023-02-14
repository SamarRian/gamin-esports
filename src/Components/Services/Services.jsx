import { Component } from "react";
import "./Services.scss";
import { AiFillThunderbolt,AiTwotoneStar } from "react-icons/ai";
import { BsShieldFillCheck } from "react-icons/bs";
import {FaThumbsUp } from "react-icons/fa";
class Services extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Services-Container">
        <div className="Services-Container__item-1">
         
          <div className="Services-Container__Icon-div">
            <AiFillThunderbolt className="Services-Container--Icon" />
          </div>
        
          <p className="Services-Container__Heading">Tournament Esports</p>
          <p className="Services-Container__Para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            doloremque harum soluta quidem temporibus voluptatem 
          </p>
          
        </div>
        <div className="Services-Container__item-2">
         
          <div className="Services-Container__Icon-div-2">
          <BsShieldFillCheck className="Services-Container--Icon-2"/>
          </div>
        
          <p className="Services-Container__Heading-2">Services</p>
          <p className="Services-Container__Para-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            doloremque harum soluta quidem temporibus voluptatem 
          </p>
          
        </div>

        <div className="Services-Container__item-3">
         
          <div className="Services-Container__Icon-div-3">
          <FaThumbsUp className="Services-Container--Icon-3"/>
          </div>
        
          <p className="Services-Container__Heading-3">Prize Pool</p>
          <p className="Services-Container__Para-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            doloremque harum soluta quidem temporibus voluptatem 
          </p>
        </div>

        <div className="Services-Container__item-4">
         
          <div className="Services-Container__Icon-div-4">
          <AiTwotoneStar className="Services-Container--Icon-4"/>
          </div>
        
          <p className="Services-Container__Heading-4">Events</p>
          <p className="Services-Container__Para-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            doloremque harum soluta quidem temporibus voluptatem 
          </p>
        </div>
          

      </div>
    );
  }
}
export default Services;
