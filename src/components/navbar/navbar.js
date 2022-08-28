import React from 'react';
import {  Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import './styles.css';
const Navbar= () =>{
  return (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/meals">Explore</Link>
      </li>
      <li>
        <Link to="/mymeals">My Meals</Link>
      </li>
      <li>
        <Link to="/login"><button className="btn-outlined-light">Log In</button></Link>
      </li>
    </ul>
  </div>
  );
}
export default Navbar;