import {Component} from 'react';
import Cookies from 'js-cookie';
// import CreatePricePerPound from './createprice.js';

class CreateIngredient extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price_per_pound: '',
    }

    this.submitIngredient = this.submitIngredient.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  submitIngredient(event) {
    event.preventDefault();

    const ingredient = {...this.state};
    ingredient.price_per_pound = parseFloat(ingredient.price_per_pound);

    this.props.addIngredient(ingredient);
    this.setState({ name: '', price_per_pound: '' });
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.submitIngredient}>
        <input type="text" name='name' value={this.state.name} placeholder="Enter ingredient name" onChange={this.handleInput}></input>
        <input type="text" name='price_per_pound' value={this.state.price_per_pound} placeholder='Enter price per pound' onChange={this.handleInput}></input>
        <button className='button' type='submit'>Add to List</button>
      </form>
    )}
}

export default CreateIngredient
