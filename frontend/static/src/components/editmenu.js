import { Component } from 'react';
import Cookies from 'js-cookie';
import { withRouter} from 'react-router-dom';

class EditMenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      ...this.props.menuitem,
      isEditing: false,

    }
    this.editMenuItem = this.editMenuItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggleMenuActiveStatus = this.toggleMenuActiveStatus.bind(this);
  }



editMenuItem() {
  this.setState({ isEditing: false});

  const menuitem = {
    id: this.state.id,
    name: this.state.name,
    menu_price: this.state.menu_price,
  }

  this.props.editMenuItem(menuitem);
}

handleInput(event){
  this.setState({ [event.target.name]:  event.target.value});
}

toggleMenuActiveStatus() {
  const {id, is_active} = this.state;
  this.props.toggleMenuActiveStatus(id, !is_active);
  this.setState({
    is_active: !is_active,
  });
}
// <input type="text" name='ingredient' value={this.props.ingredient} onChange={this.handleInput} />
render() {
  const menuitem = this.props.menuitem;
  // const ingredients = this.props.ingredients;
  const { is_active, isEditing} = this.state;


  const ingredients = Object.entries(this.state.ingredients) // [[onions, 22], [tomatoes, 23]];
  ingredients.map((ingredient, index) => (
    <li key={index}>
      <p>{ingredient[0]}</p>
      <p>{ingredient[1]}</p>
    </li>
  ));


  return(


    <li className='list'>
    {
      this.state.isEditing
      ?
        <>
      <input type="text" name='name' value={this.state.name} onChange={this.handleInput}/>
      </>
    : <><p>{this.state.name}</p>{ingredients}</>
    }
    {
      this.state.isEditing
      ? <button className="btn btn-dark" type='button' onClick={this.editMenuItem}>Save Edit</button>
      : <button className ="btn btn-dark" type="button" onClick={() => this.setState({ isEditing: true})}>Edit</button>
    }
    {
      <button className ="toggle-button" type="button" onClick={this.toggleMenuActiveStatus}>
    {
      is_active
      ? <button className='btn btn-primary'>Active</button>
      : <button className='btn btn-danger'>Inactive</button>
    }</button>
  }
    </li>
  )}
}

export default withRouter(EditMenuItem);
