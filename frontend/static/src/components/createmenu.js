import {Component} from 'react';
import Cookies from 'js-cookie';

class CreateMenuItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      availableIngredients: this.props.availableIngredients,

      preview: '',

      name: '',
      menu_price: 1100,
      ingredients: {

      },
      image: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleIngredient = this.handleIngredient.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.availableIngredients !== prevProps.availableIngredients) {
      this.setState({
        availableIngredients: this.props.availableIngredients,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const {name, ingredients, menu_price} = this.state;

    const menuitem = {
      name,
      ingredients,
      menu_price,
    };

    this.props.addMenuItem(menuitem);

    this.setState({
      name: '',
      menu_price: 1100,
      ingredients: {
      },
    });
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleIngredient(event) {
    const ingredients = {...this.state.ingredients};
    if(event.target.value === '') {
      delete ingredients[event.target.name];
    } else {
      ingredients[event.target.name] = parseInt(event.target.value);
    }

    this.setState({
      ingredients,
    });
  }

  render(){
    console.log('here', this.props.availableIngredients)
    const ingredients = this.state.availableIngredients?.map(ingredient =>
      <>
        <li key={ingredient.id}>
          <label htmlFor={ingredient.name}>{ingredient.name}</label>
          <input type="text" id={ingredient.name} name={ingredient.name} value={this.state[ingredient.name]} placeholder='Weight in Grams' onChange={this.handleIngredient}/>
        </li>
      </>
    );
    return(
      <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name='name' value={this.state.name} placeholder="Menu item name" onChange={this.handleInput} />
        <input type="text" name='menu_price' value={this.state.menu_price} placeholder="Price" onChange={this.handleInput} />
        <ul>{ingredients}</ul>
        <button type="submit">Create menu item</button>
        </form>

      </>
    )}
}

export default CreateMenuItem;
