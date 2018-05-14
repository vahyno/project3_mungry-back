import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
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
        post: data.data
      });
    });
  }

  render(){
    let post = this.state.post !== null ? this.state.post : <h2>Loading...</h2>
    console.log(this.state.post)

    let eachComment = this.state.post === null ? <h2>Loading...</h2> : this.state.post.comments.map(comment =>{
      return (
        <div className="comment" key={comment._id}>
          <div className="card">
           <div className="card-body">{ comment.content }<a className="btn-floating btn-small waves-effect waves-light red">x</a>
          </div>
        </div>
      </div>)
    })

    return (
      <div>
        <h4 id=""> {post.title} </h4>
        <img src={post.image_url} alt={post.title}/>
        <div>
        <a className="waves-effect waves-light btn" id="update-btn">Update Recipe</a>
        </div>
        <div className="single-post">
          <div className="ingredients-section">
            <h5>Ingredients:</h5>
            <div className="ingredients">
              <p>{post.ingredients}</p>
            </div>
          </div>
          <h5>Directions:</h5>
          <p className="instructions">{post.directions}</p>
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

        { eachComment }

      </div>
    )
  }



}

export default SingleRecipe;
