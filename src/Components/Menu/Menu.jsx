import React, { useState } from 'react'
import './Menu.scss'
const Menu = ({show, ListClose}) => {


const [value, SetValue] = useState("GTA V");


const handleChange = (event) => {
SetValue(event.target.value)
}
    
  return (
    <div className='Menu-container'>
      
      <h1 className='Menu-container__Heading'>Menu</h1>
      <i className="fa-solid fa-greater-than" id='Arrow'></i>
      {/* <form>
    <select value={value} onChange={handleChange}>
  <option value="Need For Speed">Need For Speed</option>
  <option value="Battlefield">Battlefield</option>
  <option value="GTA V">GTA V</option>
  <option value="Call Of Duty">Call Of Duty</option>
  </select>
  </form> */}
     
    </div>
  )
}
export default Menu
