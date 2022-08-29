import React from 'react'
import Navbar from '../components/navbar/navbar';
import FeaturedPasta from '../assets/images/featured2.jpg'
import FeaturedToast from '../assets/images/featured3.jpg'
import RecipeCard from '../components/recipeCard/recipeCard';


const MyMeals = () => {
  
  return (
    <div>
      <div className="header">
        <Navbar />
        <h2 className="page-heading">My Recipes</h2>
      </div>
      <div className="body-light">
        <button className="add-btn">
          <div className="centered-label"> Add a Recipe</div></button>
        <h2 className="subtitle">My Previous Recipes</h2>
      </div>
      <div className="recipe-container">
        <RecipeCard image={FeaturedToast} title="Breakfast Toast" description="Perfect with your morning coffee."/>
        <RecipeCard image={FeaturedPasta} title="Hearty Roasted Veggie Pasta" description="Cheesy, filling, and delicious."/>
      </div>
    </div>
  )
}

export default MyMeals