import { Component } from 'react';
import CreateIngredient from './createingredient.js';
import Cookies from 'js-cookie';
import EditIngredient from './editingredient.js';
import IngredientPriceChangeForm from './ingredientPriceChangeForm';
import {Accordion, Button, Card} from 'react-bootstrap'

class IngredientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    }
    this.toggleIngredientActiveStatus = this.toggleIngredientActiveStatus.bind(this);
    this.editIngredient = this.editIngredient.bind(this);
    this.fetchIngredients = this.fetchIngredients.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
  }
  componentDidMount() {
    this.fetchIngredients();
  }

  fetchIngredients() {
    fetch('/api/v1/menu/ingredients/').then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => this.setState({ingredients: data}));
  }

  toggleIngredientActiveStatus(id, status) {
    console.log('status', status)
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify({is_active: status}),
    }

    fetch(`/api/v1/menu/ingredients/${id}/`, options).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
        const ingredients = [...this.state.ingredients];
        const index = ingredients.findIndex(ingredient => ingredient.id === id);
        ingredients[index].is_active = status;
        this.setState({ ingredients });
      });
    }

  addIngredient(ingredient) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(ingredient)
    }
    fetch('/api/v1/menu/ingredients/', options).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data => {
      const ingredients = [
        ...this.state.ingredients,
        data
      ];
      this.setState({ingredients});
    }).catch()
  }

// I think this is similar issue I had a while back where the id doesnt have one 'true' place to relate back to. So editing the same ingredient a second time causes problems
  editIngredient(ingredient) {
    const {id} = ingredient;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(ingredient)
    }
    fetch(`/api/v1/menu/ingredients/${id}/`, options).then(response => {
      if (!response.ok) {
        console.log(response)
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then(data => {
      const ingredients = [...this.state.ingredients];
      const index = ingredients.findIndex(ingredient => ingredient.id == id);
      ingredients[index] = data;
      this.setState({ ingredients });
    });
  }


  render() {
    const activeIngredients = this.state.ingredients
      .filter(ingredient => ingredient.is_active);

    const ingredients = this.state.ingredients.map((ingredient) => (
      <EditIngredient key={ingredient.id} ingredient={ingredient} toggleIngredientActiveStatus={this.toggleIngredientActiveStatus} editIngredient={this.editIngredient}/>
    ));
    return (
      <>
      <div className='ingredient-container'>
        <h2>Add Ingredient</h2>
        <CreateIngredient addIngredient={this.addIngredient} ingredients={this.state.ingredients}/>
          <Accordion  defaultActiveKey="0">
            <Card className='accordion-card'>
              <Card.Header className='accordion-header'>
                <Accordion.Toggle as={Button}  eventKey="0">
                  <span className='accordion-toggle'>
                    Update Ingredient Price
                  </span>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <IngredientPriceChangeForm ingredients={activeIngredients} editIngredient={this.editIngredient}/>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        <h2 className='ingredient-title'>Ingredient List</h2>
        <div className='table-responsive'>
          <table class='table'>
            <thead>
             <tr>
               <th scope="col">Ingredients</th>
               <th scope="col">Price</th>
               <th scope="col">Edit</th>
               <th scope="col">Active / Inactive</th>
             </tr>
             </thead>
             <tbody>
              {ingredients}
             </tbody>

          </table>
        </div>

        </div>
      </>
    )
  }
}

export default IngredientList;
