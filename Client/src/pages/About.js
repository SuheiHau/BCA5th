import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../Styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${ MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
       This websites is basically for Nielit hostaller as our curry suck and we may die if we are constantly 
       eating this shitti curri so student in Nielit hostal can go to this websites a buy | order pizza's with 
       99% Discount .Our main idea is to provide best taste and hygiene especially for hosteller in Nielit as our 
       Canteen fastfood are also thrash and taste shitt just kidding too expensive and we get only a pinch  .If you buy from our website you will
       get the 10x amount meaning quantity than college canteen and also save money as we offer 99% free food for hostaller
       especially Nielit ensuring that they may not go malnutrition,We are also on Zoomato and Swiggi .

        </p>
      </div>
    </div>
  );
}

export default About;
