import React from 'react'
import '../featuredCard/styles.css'

const RecipeCard = (props) => {
  return (
    <div className="card">
        <div>
            <img className="card-img" src={props.image} alt="featured-food"></img>
            <h3 className="card__title">{props.title}</h3>
            <p className="card__description">{props.description}</p>
        </div>
    </div>
  )
}

export default RecipeCard