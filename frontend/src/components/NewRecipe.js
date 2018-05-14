import React, { Component } from 'react';
import RecipesModel from '../models/RecipesModel';


class NewRecipe extends Component {
  state = {
    title: '',
    description: '',
    ingredients: '',
    directions: '',
    thumbnail: '',
  }



  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
    console.log(this.title);
  }

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
    console.log(this.description);

  }

  handleIngredientsChange = (e) => {
    this.setState({
      ingredients: e.target.value,
    });
    console.log(this.ingredients);
  }

  handleDirectionsChange = (e) => {
    this.setState({
      directions: e.target.value,
    });
    console.log(this.directions);
  }

  handleThumbnailChange = (e) => {
    this.setState({
      thumbnail: e.target.value,
    });
    console.log(this.thumbnail);
  }


  onFormSubmit = (e)=> {
    e.preventDefault();
    console.log('Form Submit!')
  }

  render(){




    return (

        <div className="column">
          <form className="col s12" onSubmit={this.onFormSubmit}>
            <div className="input-field col s12">
                <input onChange={ this.handleTitleChange } value={this.state.title} placeholder="Title" id="title" type="text" className="validate"/>
              </div>
              <div className="input-field col s12">
                <input onChange={ this.handleDescriptionChange } value={this.state.description} placeholder="Description" id="Description" type="text" className="validate"/>
              </div>
              <div className="input-field col s12" >
                <textarea cols="40" rows="5" onChange={ this.handleIngredientsChange } value={this.state.ingredients} placeholder="Ingredients" className="validate" id="ingredients"></textarea>
              </div>
              <div className="input-field col s12" >
                <textarea cols="40" rows="5" onChange={ this.handleDirectionsChange } value={this.state.directions} placeholder="Directions" className="validate" id="directions"></textarea>
              </div>
              <div className="input-field col s12">
                <input onChange={ this.handleThumbnailChange } value={this.state.thumbnail} placeholder="Add image source" id="image" type="text" className="validate"/>
              </div>
             <button className="btn waves-effect waves-light" type="submit" name="action">Create
               <i className="material-icons right"></i>
             </button>
          </form>
        </div>

    )
  }



}

export default NewRecipe;
