import { Component } from 'react';
import Cookies from 'js-cookie';

class EditMenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      name: this.props.menuitem.name,
    }
    this.editMenuItem = this.editMenuItem.bind(this);
    this.inputMenuItem = this.inputMenuItem.bind(this);
  }

editMenuItem() {
  this.setState({ isEditing: false});

  const menuitem = {
    name: this.state.name,
  }

  const id = this.props.menuitem.id;
  this.props.editMenuItem(id, menuitem);
}

inputMenuItem(event){
  this.setState({ [event.target.name]:  event.target.value});
}
render() {
  const menuitem = this.props.menuitem;
  return(
    <li className='list'>
    {
      this.state.isEditing
      ?
        <>
          <input type="text" name='name' value={this.state.name} onChange={this.inputMenuItem} />
        </>

      : <p>{menuitem.name}</p>
    }
    {
      this.state.isEditing
      ? <button className="edit-menuitem" type='button' onClick={this.editMenuItem}>Save Edit</button>
      : <button className ="edit-button" type="button" onClick={() => this.setState({ isEditing: true})}>Edit</button>
    }
    {<button className ="detail-button" type="button" onClick={() => this.props.deleteMenuItem(menuitem.id)}>x</button>}
    </li>
  )}
}

export default EditMenuItem;
