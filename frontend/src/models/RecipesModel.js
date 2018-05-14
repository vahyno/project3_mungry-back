import axios from 'axios';

class RecipesModel {
  static searchAll = () => {
    const request = axios.get(`http://localhost:8080/api/recipes/`);
    return request;
  }

  static createNew = (data) => {
    console.log("axios createdata",data);
    const request = axios.post(`http://localhost:8080/api/recipes/`, data);
    return request;
  }

  static findRecipe = (recipe_id) => {
    const request = axios.get(`http://localhost:8080/api/recipes/${recipe_id}`);
    return request;
  }



}

export default RecipesModel;
