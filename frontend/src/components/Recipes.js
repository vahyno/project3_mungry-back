import React, { Component } from 'react';
import RecipesModel from '../models/RecipesModel';
import { Link } from 'react-router-dom';


class Recipes extends Component {
  state = {
    results: null,
  }

  componentDidMount() {
    RecipesModel.searchAll()
      .then(data =>  {
        console.log(data)
        this.setState({
          results: data.data
        });
      });
  }

  render(){

    console.log(this.state.results)

    let results = this.state.results
      ? this.state.results
        .sort(((a,b) => {
          return b.votes - a.votes;
        })).map(recipe => {
          console.log("Single Recipe: ", recipe)

          return (
          <div className="col s12 m7" key={recipe._id} recipe={recipe}>
           <h4 className="header">{recipe.title}</h4>

           <div className="card horizontal">
              <div className="card-image">
               <img alt={recipe.image_url} src={recipe.image_url} />
              </div>
             <div className="card-stacked">
               <div className="card-content">

               <h5>Description</h5>
               <p className="description">{recipe.description}</p>
                 <hr />

               <div className="vote-style">
                 <h6>  Vote  </h6 >

                 <div className="vote">
                   <a className="btn-floating btn-small waves-effect waves-light green"><i className="material-icons">+</i></a>
                   <h6>{recipe.votes}</h6>
                   <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">-</i></a>
                 </div>
                 </div>
               </div>
               <div className="card-action">
                 <Link to ={`/recipes/${recipe._id}`}>How to make</Link>
               </div>
             </div>
            </div>
          </div> )

        })
        : null;

    return (
      <div>
        {results}
      </div>
    )
  }



}

export default Recipes;
