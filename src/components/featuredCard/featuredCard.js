import React from 'react'
import './styles.css'

const FeaturedCard = (props) => {
  return (
    <div className="card">
        <div>
            <img className="card-img" src={props.image} alt="featured-food-image"></img>
            <h3 className="card__title">{props.title}</h3>
            <p className="card__description">{props.description}</p>
        </div>
    </div>
  )
}

export default FeaturedCard