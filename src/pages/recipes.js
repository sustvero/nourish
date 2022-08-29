import React from 'react'
import Navbar from '../components/navbar/navbar';
import RecipeCard from '../components/recipeCard/recipeCard';
import FeaturedSalad from '../assets/images/featured1.jpg'
import FeaturedPasta from '../assets/images/featured2.jpg'
import FeaturedToast from '../assets/images/featured3.jpg'
import Footer from '../components/footer'
import RecipeExpand from './recipeExpand';

let recipe = true;

const Recipes = () => {
  return (
    <div>
      <div className="header">
        <Navbar />
        <h2 className="page-heading">Explore Recipes</h2>
      </div>
      <div className="body-light">
        <h2 className="subtitle">Browse Recipes</h2>
      </div>
      <div className="recipe-container">
          <RecipeCard image={FeaturedSalad} title="The Ultimate Salad Bowl" description="A simple salad you can make in under 10 minutes."/>
          <RecipeCard image={FeaturedPasta} title="Hearty Roasted Veggie Pasta" description="Cheesy, filling, and delicious."/>
          <RecipeCard image={FeaturedToast} title="Breakfast Toast" description="Perfect with your morning coffee."/>
      </div>
    </div>
  )
}

export default Recipes