import React from 'react'
import Footer from '../footer'
import FeaturedSalad from '../../assets/images/featured1.jpg'

const RecipeExpand = () => {
  return (
    <div>
      <div className="expand-container">
      <img src={FeaturedSalad}></img>
        <div className="body-light">
          
          <h3>The Ultimate Salad Bowl</h3>
        </div>
        <Footer />
        </div>
    </div>
  )
}

export default RecipeExpand