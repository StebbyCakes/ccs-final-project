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
    .then(data => {
      data.forEach(ingredient => {
        ingredient.price_listings.forEach(price => {
          price.price_per_pound = (price.price_per_pound / 100);
        });
      });
      this.setState({ingredients: data})
    });
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
      console.log('data', data)
      const price_listings = data.price_listings.map(price_listing => {
        price_listing.price_per_pound = (price_listing.price_per_pound / 100).toFixed(2);
        return price_listing
      });

      data.price_listings = price_listings;

      // const ingredient = data.price_listings.map(price_listing => {
      //   price_listing.price_per_pound = price_listing.price_per_pound / 100;
      //   return price_listing;
      // })
      const ingredients = [
        ...this.state.ingredients,
        data,
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
        <h2 className='ingredient-title'>Ingredient List</h2>
          <Accordion>
            <Card className='accordion-card'>
              <Card.Header className='accordion-header'>
                <Accordion.Toggle as={Button}  eventKey="0">
                  <span className='accordion-toggle'>
                    Create Ingredient
                  </span>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body >
                  <CreateIngredient className='ingredient-form' addIngredient={this.addIngredient} ingredients={this.state.ingredients}/>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        <div className='table-responsive'>
          <table class='table'>
            <thead>
             <tr>
               <th scope="col">Ingredients</th>
               <th scope="col">Price</th>
               <th scope="col">Effective Date</th>
               <th scope="col"></th>
               <th scope="col">Price Change</th>
               <th scope="col">Effective Date</th>
               <th scope="col"></th>
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
