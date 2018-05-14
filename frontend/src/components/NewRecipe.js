import React, { Component } from 'react';
import RecipesModel from '../models/RecipesModel';


class NewRecipe extends Component {
  state = {
    post: '',
  }



  onInputChange = (e) => {

  }

  onFormSubmit = (e)=> {

  }

  render(){




    return (

        <div className="column">
          <form className="col s12" onSubmit={this.onFormSubmit}>
            <div className="input-field col s12">
                <input onChange={ this.onInputChange } value={this.state.post} placeholder="Title" id="title" type="text" className="validate"/>
              </div>
              <div className="input-field col s12">
                <input onChange={ this.onInputChange } value={this.state.post} placeholder="Description" id="Description" type="text" className="validate"/>
              </div>
              <div className="input-field col s12" >
                <textarea cols="40" rows="5" onChange={ this.onInputChange } value={this.state.post} placeholder="Ingredients" className="validate" id="ingredients"></textarea>
              </div>
              <div className="input-field col s12" >
                <textarea cols="40" rows="5" onChange={ this.onInputChange } value={this.state.post} placeholder="Directions" className="validate" id="directions"></textarea>
              </div>
              <div className="input-field col s12">
                <input onChange={ this.onInputChange } value={this.state.post} placeholder="Add image source" id="image" type="text" className="validate"/>
              </div>
          </form>
             <button className="btn waves-effect waves-light" type="submit" name="action">Create
            <i className="material-icons right"></i>
          </button>
        </div>

    )
  }



}

export default NewRecipe;
