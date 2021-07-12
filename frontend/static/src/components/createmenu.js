import {Component} from 'react';
import Cookies from 'js-cookie';
// import CreatePricePerPound from './createprice.js';

class CreateMenuItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
    }

    this.submitMenuItem = this.submitMenuItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  submitMenuItem(event) {
    event.preventDefault();

    this.props.addIngredient(ingredient);
    this.setState({ name: '' });
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return(
      <form onSubmit={this.submitMenuItem}>
        <input type="text" name='name' value={this.state.name} placeholder="Menu item name" onChange={this.handleInput}></input>
        <button className='button' type='submit'>Add to List</button>
      </form>
    )}
}

export default CreateMenuItem
