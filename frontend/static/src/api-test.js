import { Component } from 'react';

class Api extends Component{

  componentDidMount() {
    fetch('https:api.spoonacular.com/food/ingredients/search?query=banana&number=2&sort=calories&sortDirection=desc?apiKey=7f40aaf07d494a74910b1ac4fcff7357')

    .then(response => {
      if (!response.ok){
        throw new Error ('Network response was not ok');
      }
      return response.json();
    })
    .then(data => console.log('API test: ', { data })).catch(error => {
      console.error('Problem with fetch request: ', error);
    });
}
render(){
  return(
    query
  );
  }
}
