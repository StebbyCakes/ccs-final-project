import { Component } from 'react';
import Cookies from 'js-cookie';

class EditMenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      id: this.props.menuitem.id,
      name: this.props.menuitem.name,
    }
    this.editMenuItem = this.editMenuItem.bind(this);
    this.inputMenuItem = this.inputMenuItem.bind(this);
  }

editMenuItem() {
  this.setState({ isEditing: false});

  const menuitem = {
    id: this.state.id,
    name: this.state.name,
  }

  this.props.editMenuItem(menuitem.id, menuitem.name);
}

inputMenuItem(event){
  this.setState({ [event.target.name]:  event.target.value});
}
// <input type="text" name='ingredient' value={this.props.ingredient} onChange={this.inputMenuItem} />
render() {
  const menuitem = this.props.menuitem;
  return(
    <li className='list'>
    {
      this.state.isEditing
      ?
        <>
          <input type="text" name='name' value={this.state.name} onChange={this.inputMenuItem}/>

        </>

      : <p>{this.state.name}</p>
    }
    {
      this.state.isEditing
      ? <button className="btn btn-dark" type='button' onClick={this.editMenuItem}>Save Edit</button>
      : <button className ="btn btn-dark" type="button" onClick={() => this.setState({ isEditing: true})}>Edit</button>
    }
    {<button className ="btn btn-danger" type="button" onClick={() => this.props.deleteMenuItem(menuitem.id)}>x</button>}
    </li>
  )}
}

export default EditMenuItem;
