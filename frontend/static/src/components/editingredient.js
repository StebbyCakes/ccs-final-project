import { Component } from 'react';
import Cookies from 'js-cookie';

class EditIngredient extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      name: this.props.ingredient.name,
      price_per_pound: this.props.ingredient.price_per_pound,
    }
    this.editIngredient = this.editIngredient.bind(this);
    this.inputIngredient = this.inputIngredient.bind(this);
  }

editIngredient() {
  this.setState({ isEditing: false});

  const ingredient = {
    name: this.state.name,
    price_per_pound: this.state.price_per_pound
  }

  const id = this.props.ingredient.id;
  this.props.editIngredient(id, ingredient);
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
      : <button className ="edit-button" type="button" onClick={() => this.setState({ isEditing: true})}>EDIT</button>
    }
    {<button className ="detail-button" type="button" onClick={() => this.props.deleteIngredient(ingredient.id)}>DELETE</button>}
    </li>
  )}
}

export default EditIngredient;
