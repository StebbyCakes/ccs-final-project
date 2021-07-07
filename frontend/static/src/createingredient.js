import {Component} from 'react';
import Cookies from 'js-cookie';

class CreateIngredient extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: '',
    }
    this.submitIngredient = this.submitIngredient.bind(this);
    this.inputIngredient = this.inputIngredient.bind(this);
  }

  submitIngredient(event) {
    event.preventDefault();
    const newSubmit = {
      ingredient: this.state.ingredients,
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(newSubmit),
    }
    fetch('/api/v1/ingredients/', options)
      .then(response => response.json());

    this.setState({ ingredients: '' });
  }

  inputIngredient(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.submitIngredient}>
        <input className='ingredient-submit' name='ingredients' value={this.state.ingredients} placeholder="Enter a new Ingredient" onChange={this.inputIngredient}></input>
        <button className='button' type='submit'>Add to List</button>
      </form>
    )}
}

export default CreateIngredient
