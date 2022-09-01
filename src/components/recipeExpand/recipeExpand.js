import React from 'react'
import './styles.css'
import Footer from '../footer'
import FeaturedSalad from '../../assets/images/featured1.jpg'

const RecipeExpand = () => {
  return (
    <div>
      <div className="recipe-card-lg">
      <img src={FeaturedSalad} className="recipe-img" alt="recipe"></img>
        <div className="card-body">
          
          <h2>The Ultimate Salad Bowl</h2>
          <p>A simple salad you can make in under 10 minutes.</p>
          <h3>Ingredients:</h3>
          <p>Iceberg lettuce, spinach, arugula, radish, onion, pita chips, and a dressing of your choice.</p>
          <h3>Instructions:</h3>
          <p>1. Chop the lettuce, spinach, and arugula into bite-sized pieces. <br></br>
            2. Add the radish and onion. <br></br>
            3. Garnish the salad with some pita chips and the dressing of your choice! <br></br>
          </p>
        </div>
          
        </div>
        <Footer />
    </div>
  )
}

export default RecipeExpand