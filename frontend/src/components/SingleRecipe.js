import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipesModel from '../models/RecipesModel';


class SingleRecipe extends Component {
  state = {
    // title: '',
    // ingredients: '',
    // directions: '',
    // thumbnail: '',
    // comments: null,
    post: null
  }
  componentDidMount() {
    let recipeId = this.props.match.params.recipe_id;
    RecipesModel.findRecipe(recipeId)
    .then(data => {
      // console.log('SingleRecipe by ID: ',data);
      this.setState({
      //   title: data.title,
      //   ingredients: ,
      //   directions: ,
      //   thumbnail: ,
      //   comments: ,
      post: data.data
      });
    });
  }

  render(){
    let post = this.state.post !== null ? this.state.post : <h2>Loading...</h2>
    console.log(this.state.post)

    return (
      <div>
        <h4 id=""> {post.title} </h4>

        <img src={post.image_url} alt={post.title}/>
        <a className="waves-effect waves-light btn" id="update-btn">Update Recipe</a>


      <div className="single-post">
        <div className="ingredients-section">
          <h5>Ingredients</h5>
          <div className="ingredients">
            <p>{post.ingredients}</p>
          </div>
        </div>

        <h5>How to make</h5>
        <p className="instructions">{post.instructions}</p>
      </div>

      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Write your comment!" id="comment" type="text" className="validate" />
            </div>
          </div>
            <a className="waves-effect waves-light btn">New Comment</a>
        </form>
      </div>

      </div>
    )
  }



}

export default SingleRecipe;
