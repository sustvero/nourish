import React from 'react'
import Navbar from '../components/navbar/navbar';
import FeaturedPasta from '../assets/images/featured2.jpg'
import FeaturedToast from '../assets/images/featured3.jpg'
import RecipeCard from '../components/recipeCard/recipeCard';
import { useState } from 'react';
import AddRecipe from '../components/addRecipe/addRecipe';
import BackButton from '../components/backButton/backButton';
import RecipeExpand from '../components/recipeExpand/recipeExpand';

const MyMeals = () => {

  const [showAdd, setShowAdd] = useState(false);

  const addClick = () => {
    setShowAdd(true);
  }

  const hideAdd = () => {
    setShowAdd(false);
  }

  const [showRecipe, setShowRecipe] = useState(false);

  const displayRecipe = () => {
    setShowRecipe(true)
  }

  const hideRecipe = () => {
    setShowRecipe(false)
  }

  return (
    <div>
      <div className="header">
        <Navbar />
        <h2 className="page-heading">My Recipes</h2>
      </div>
      {showAdd?
        <div>
          <BackButton onClick={hideAdd} location="My Recipes"/>
          <AddRecipe />
        </div> 
       :
        showRecipe? 
        <div>
          <BackButton onClick={hideRecipe} location="My Recipes"/>
          <RecipeExpand />
        </div> :
        <div>
        <div className="body-light">
          <button className="add-btn" onClick={addClick}>
            <div className="centered-label"> Add a Recipe</div></button>
          <h2 className="subtitle">My Previous Recipes</h2>
        </div>
        <div className="recipe-container">
          <RecipeCard image={FeaturedToast} onClick={displayRecipe} title="Breakfast Toast" description="Perfect with your morning coffee."/>
          <RecipeCard image={FeaturedPasta} title="Hearty Roasted Veggie Pasta" description="Cheesy, filling, and delicious."/>
        </div>
      </div>
      }
      
    </div>
  )
}

export default MyMeals