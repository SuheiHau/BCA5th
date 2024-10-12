import React ,{useState}from 'react';
import Logo from '../assets/pizzaLogo.png';
import {Link} from "react-router-dom";
import { Reorder } from '@material-ui/icons';
import '../Styles/Navbar.css'


function Navbar() {
  
  const [openLink,setOpenLinks]= useState(false);

const toggleNavbar =()=>{
setOpenLinks(!openLink)
}
  return (
  <div className='navbar'> 
        <div className='leftSide' id={openLink ? "open" : "close"}>
          <img src={Logo} alt="logo"/>
          <div className='hiddenLinks'>
            <Link to="/">Home </Link>
            <Link to="/menu">Menu </Link>
            <Link to="/about">about </Link>
            <Link to="/contact">contact us </Link>
          </div>
        </div>
      <div className='rightSide'> 
      <Link to="/">Home </Link>
      <Link to="/menu">Menu </Link>
      <Link to="/about">about </Link>
      <Link to="/contact">contact us</Link>
      <button onClick={toggleNavbar}>
        <Reorder/>
      </button>
      </div>
      
    </div>
  );
}

export default Navbar
