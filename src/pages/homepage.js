import React from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer';
import Salad from '../assets/images/salad.png';


const HomePage = () => {
  return (
    <div className="page">
      <div className="header">
          <Navbar />
          <div className="title-section">
            <h1 className="header-title">Food is fuel with Nourish.</h1>
            <button className="get-started-btn" backgroundColor="white">Get Started</button>
          </div>
      </div>
      <div className="light">
        <div className="center-section">
          <h3>Share Your Healthy Meals</h3>
          <img src={Salad} alt="healthy-meal" height="100" width="100"></img>
          <p>Nourish is a platform for sharing quick, easy recipes that are both healthy and delicious.
            Just upload a name, select a category, add some ingredients, and upload a photo of your meal.
          </p>
        </div>
      </div>
      <div className="medium">
        <h3>Featured Recipes</h3>
        <p>foods tbd</p>
        <button className="btn-outlined-dark">See More</button>
      </div>
      <div> 
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage