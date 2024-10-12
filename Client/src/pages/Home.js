import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import '../Styles/Home.css'

function Home() {
return (
    <div>
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
        <div
        className='headerContainer'>
            <h1>Pedro's Pizzeria</h1>
            <p>pizza to fit any taste</p>
            <Link to ="/menu">
            <button>order now</button>
            </Link>
        </div>   
    </div>
    </div>
)
}

export default Home
