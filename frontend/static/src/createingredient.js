import {Component} from 'react';
import Cookies from 'js-cookie';

class CreateIngredient extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredient: '',
    }
    this.submitIngredient = this.submitIngredient.bind(this);
    this.inputIngredient = this.inputIngredient.bind(this);
  }

  submitIngredient(event) {
    event.preventDefault();

    const ingredient = {
      ingredient: this.state.ingredient,
    };

    this.props.addIngredient(ingredient);
    this.setState({ ingredient: '' });
  }

  inputIngredient(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.submitIngredient}>
        <input className='ingredient-submit' name='ingredient' value={this.state.ingredient} placeholder="Enter a new Ingredient" onChange={this.inputIngredient}></input>
        <button className='button' type='submit'>Add to List</button>
      </form>
    )}
}

export default CreateIngredient
