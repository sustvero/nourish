import React from 'react'

const FeaturedCard = (image, title, description) => {
  return (
    <div>
        <div>
            <img src={image} />
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{description}</p>
        </div>
    </div>
  )
}

export default FeaturedCard