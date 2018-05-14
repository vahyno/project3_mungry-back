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

    let formData = {
      title: this.state.title,
      description: this.state.description,
      ingredients: this.state.ingredients,
      directions: this.state.directions,
      image_url: this.state.thumbnail,
      votes: 0,
      comments: []

    }
    RecipesModel.createNew(formData)
      .then(data =>  {
        console.log(data)
        this.setState({
          results: data.data
        });
        this.props.history.push('/');
      });
  }

  render(){




    return (

        <div className="column">
          <form className="col s12" onSubmit={this.onFormSubmit}>
            <div className="input-field col s12">
              <input onChange={ this.handleTitleChange } value={this.state.title} placeholder="Title" id="title" type="text" className="validate" required/>
            </div>
            <div className="input-field col s12">
              <input onChange={ this.handleDescriptionChange } value={this.state.description} placeholder="Description" id="Description" type="text" className="validate" required/>
            </div>
            <div className="input-field col s12" >
              <textarea cols="40" rows="5" onChange={ this.handleIngredientsChange } value={this.state.ingredients} placeholder="Ingredients" className="validate" id="ingredients" required></textarea>
            </div>
            <div className="input-field col s12" >
              <textarea cols="40" rows="5" onChange={ this.handleDirectionsChange } value={this.state.directions} placeholder="Directions" className="validate" id="directions" required></textarea>
            </div>
            <div className="input-field col s12">
              <input onChange={ this.handleThumbnailChange } value={this.state.thumbnail} placeholder="Add image source" id="image" type="text" className="validate"/>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Create</button>
          </form>
        </div>

    )
  }



}

export default NewRecipe;
