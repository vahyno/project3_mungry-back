import React, { Component } from 'react';
import RecepiesModel from '../models/RecepiesModel';


class Recepies extends Component {
  state = {
    results: null,
  }

  componentDidMount() {
    RecepiesModel.searchAll()
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
          return a.title - b.title;
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
                 <a href="./post.html">How to make</a>
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

export default Recepies;
