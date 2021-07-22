import { Component } from 'react';
import Cookies from 'js-cookie';
import { withRouter} from 'react-router-dom';

class EditMenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      id: this.props.menuitem.id,
      name: this.props.menuitem.name,
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
  }

  this.props.editMenuItem(menuitem.id, menuitem.name);
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
  const ingredient = this.props.ingredients;
  const { is_active, isEditing,} = this.state;
  return(


    <li className='list'>
    {
      this.state.isEditing
      ?
        <>
      <input type="text" name='name' value={this.state.name} onChange={this.handleInput}/>
      </>
      : <p>{this.state.name}</p>
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
