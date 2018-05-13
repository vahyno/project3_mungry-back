import axios from 'axios';

class RecepiesModel {
  static searchAll = () => {
    const request = axios.get(`http://localhost:8080/api/recipes/`);
    return request;
  }

}

export default RecepiesModel;
