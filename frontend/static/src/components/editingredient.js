import { Component } from 'react';
import Cookies from 'js-cookie';

class EditIngredient extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      id: this.props.ingredient.id,
      name: this.props.ingredient.name,
      price_per_pound: this.props.ingredient.price_per_pound,
    }
    this.editIngredient = this.editIngredient.bind(this);
    this.inputIngredient = this.inputIngredient.bind(this);
  }

editIngredient() {
  this.setState({ isEditing: false});

  const ingredient = {
    id: this.state.id,
    name: this.state.name,
    price_per_pound: this.state.price_per_pound
  }

  // const id = this.props.ingredient.id;
  this.props.editIngredient(ingredient.id, ingredient.name, ingredient.price_per_pound);
}

inputIngredient(event){
  this.setState({ [event.target.name]:  event.target.value});
}
render() {
  const ingredient = this.props.ingredient;
  return(
    <li className='list'>
    {
      this.state.isEditing
      ?
        <>
          <input type="text" name='name' value={this.state.name} onChange={this.inputIngredient} />
          <input type="text" name='price_per_pound' value={this.state.price_per_pound} onChange={this.inputIngredient} />
        </>

      : <p>{ingredient.name}</p>
    }
    {
      this.state.isEditing
      ? <button className="edit-ingredient" type='button' onClick={this.editIngredient}>Save Edit</button>
      : <button className ="edit-button" type="button" onClick={() => this.setState({ isEditing: true})}>Edit</button>
    }
    {<button className ="detail-button" type="button" onClick={() => this.props.deleteIngredient(ingredient.id)}>x</button>}
    </li>
  )}
}

export default EditIngredient;
