import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> Rs:{price} </p>

      <NavLink to="/User-Order">
        <button className="btn">Order Now</button>
      </NavLink>

  </div>
  );
}
export default MenuItem;





