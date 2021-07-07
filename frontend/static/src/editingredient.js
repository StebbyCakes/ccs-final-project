import { Component } from 'react';
import Cookies from 'js-cookie';

class EditIngredient extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      ingredient: this.props.ingredient.ingredient,
    }
    this.editingredient = this.editingredient.bind(this);
    this.inputIngredient = this.inputIngredient.bind(this);
  }

editIngredient() {
  this.setState({ isEditing: false});
  const ingredient = this.props.ingredient;
  ingredient.ingredient = this.state.ingredient;
  this.props.editIngredient(ingredient);
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
      ? <input type="text" name='ingredient' value={this.state.ingredient} onChange={this.inputIngredient}></input>
      : <p>{ingredient.ingredient}</p>
    }
    {
      this.state.isEditing
      ? <button className="edit-ingredient" type='button' onClick={this.editIngredient}>Save Edit</button>
      : ingredient.has_owner_permissions && <button className ="edit-button" type="button" onClick={() => this.setState({ isEditing: true})}>EDIT</button>
    }
    {message.has_owner_permissions && <button className ="detail-button" type="button" onClick={() => this.props.deleteIngredient(ingredient.id)}>DELETE</button>}
    </li>
  )
}
}

export default EditIngredient;
