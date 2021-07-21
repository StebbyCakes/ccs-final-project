import {Component} from 'react';
import Cookies from 'js-cookie';

class CreateMenuItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      ingredients: [],
      ingredientSelections: [],
      ingredient: '',
      weight_of_ingredient: '',
      options: 'new option',
      showIngredients: true,
    }
    this.submitMenuItem = this.submitMenuItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitIngredientToMenuItem.bind(this);
    this.fetchIngredients = this.fetchIngredients.bind(this);
    this.submitIngredientToMenuItem = this.submitIngredientToMenuItem.bind(this);
  }

  componentDidMount() {
    this.fetchIngredients();
  }

  submitMenuItem(event) {
    event.preventDefault();

    const menuitem = {...this.state};
    menuitem.weight_of_ingredient = parseFloat(menuitem.weight_of_ingredient);

    this.props.addMenuItem(menuitem);
    this.setState({ name: '', ingredient: '', weight_of_ingredient: '' , showIngredients: false, ingredients: []});
  }

  submitIngredientToMenuItem(event) {
    event.preventDefault();

    const ingredient = {
      name: this.state.ingredient,
      weight_of_ingredient: this.state.weight_of_ingredient,
    }

    const ingredients = [...this.state.ingredients, ingredient];
    this.setState({ingredients});

  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value, showIngredients: true});
  }

  fetchIngredients() {
      const response = fetch('/api/v1/menu/')
      .then(data => data.json())
      .then(json => this.setState({ingredientSelections: json}))
    }

  render(){
    const ingredients = this.state.ingredients.map(ingredient => <div id='ingredient-list' >{ingredient.name}</div>);
    return(
      <form onSubmit={this.submitMenuItem}>
        <input type="text" name='name' value={this.state.name} placeholder="Menu item name" onChange={this.handleInput} />
        <select name="ingredient" value={this.state.ingredient} onChange={this.handleInput}>
          <option>Select ingredient</option>
          {this.state.ingredientSelections.map((ingredient) => (
            <option key={ingredient.id} value={ingredient.name}>
              {ingredient.name}
            </option>
          ))}
        </select>
        <input type="text" name='weight_of_ingredient' value={this.state.weight_of_ingredient} placeholder='Weight in Grams' onChange={this.handleInput}/>
        <button className='button' type='button' onClick={this.submitIngredientToMenuItem}>+</button>
        <button className='button' type='submit'>Add to List</button>

      {this.state.showIngredients && ingredients}
      </form>
    )}
}

export default CreateMenuItem;
