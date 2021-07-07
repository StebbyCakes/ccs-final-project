import { Component } from 'react';
import CreateIngredient from './createingredient.js';
import Cookies from 'js-cookie';
import EditIngredient from './editingredient.js';

class IngredientList extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: [],
    }
    this.deleteIngredient = this.deleteIngredient.bind(this);
    this.editIngredient = this.editIngredient.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
      this.retrieveIngredients = setInterval(this.fetchData, 500)
    }

    componentWillUnmount() {
      clearInterval(this.retrieveIngredients)
    }
    fetchData() {
      fetch('/api/v1/ingredients/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => this.setState({ ingredients: data }));
    }


    deleteIngredient(id) {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
      }

      fetch(`/api/v1/ingredient/${id}`, options)
        .then(response => {
          const ingredients = [ ...this.state.ingredients ];
          const index = ingredients.findIndex(ingredient => ingredient.id === id);
          ingredients.splice(index, 1);
          this.setState({ ingredients });
        })
        .catch((error) => {
          console.log.error('Error:', error);
        });
    }

    editIngredient(ingredient) {
      const id = ingredient.id;
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(ingredient),
      }
      fetch(`/api/v1/ingredients/${id}/`, options)
        .then(response => {
          if(!response.ok) {
            throw new Error('Network response was not ok');
          }
          const ingredients = [ ...this.state.ingredients];
          const index = ingredients.findIndex(ingredient => ingredient.id === id);
          ingredients[index] = ingredient;
          this.setState({ ingredients });
        });
    }

    render() {
      const displayIngredients = this.state.ingredients.map((ingredient) => (
        <EditIngredient key={ingredient.id} ingredient={ingredient} deleteIngredient={this.deleteIngredient} editIngredient={this.editIngredient} />
      ));
      return(
          <>
          <div className="ingredient-list">
            <ul>{displayIngredients}</ul>
              <section>
                <CreateIngredient/>
              </section>
          </div>
          </>
      )
    }
}

export default IngredientList;
