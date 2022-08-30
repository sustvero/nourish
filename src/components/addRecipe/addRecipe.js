import React from 'react'
import './styles.css'

const AddRecipe = () => {
  return (
    <div>
      <div className="body-light">
        <div className="expand-container">
          <h2 className="subtitle">Add A Recipe</h2>
          <form>
            <div className="add-container">
              <div className="add-left-section">
              <h3>Recipe Information</h3>
              <div className="add-form-section">
                <label>Recipe Name:</label>
                <input type="text"></input>
                <label>Category:</label>
                <select>
                  <option value="Select">Select</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Salad">Salad</option>
                  <option value="Soup">Soup</option>
                  <option value="Entree">Entree</option>
                </select>
                
              </div>
              <div className="add-form-section">
                <label>Recipe Description:</label>
                <input type="text" className="desc-input"></input>
                
              </div>
              <div className="add-form-section">
                <label>Recipe Ingredients:</label>
                <div>
                  <textarea rows="5" columns="480"></textarea>
                </div>
              </div>
              <div className="add-form-section">
                <label>Recipe Steps: </label>
                <div>
                  <textarea rows="7" columns="480"></textarea>
                </div>
              </div>
              
              </div>
              <div className='add-right-section'>
              <h3>Upload an Image</h3>
              <div className="add-form-section">
                <div className="img-placeholder"></div>
              </div>
              </div>
            </div>
            <button className="btn-dark submit-btn">Post Recipe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddRecipe