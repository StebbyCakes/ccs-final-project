import { Component } from 'react';
import CreateIngredient from './createingredient.js';
import Cookies from 'js-cookie';
import EditIngredient from './editingredient.js';

class IngredientWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients = [],
    }

  }
  componentDidMount() {
      this.retrieveIngredients = setInterval(this.fetchData, 500)
    }

    componentWillUnmount() {
      clearInterval(this.retrieveIngredients)
    }
    fetchData() {
      fetch('/api/v1/ingredient/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => this.setState({ ingredients: data }));
    }
  
}
