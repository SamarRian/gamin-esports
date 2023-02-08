import React from 'react'
import './Navbar.scss'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import InputField from '../InputField/InputField'
import SearchIcon from '../SearchIcon/SearchIcon'
import LoginButton from '../LoginButton/LoginButton'
import SignUp from '../SignUp/SignUp'
const Navbar = () => {

  return (
    <div className='Container'>
     
       <Logo />
       <Menu />
       <InputField />
       <SearchIcon />
       <LoginButton />
       <SignUp />
    </div>
  )
}

export default Navbar;
