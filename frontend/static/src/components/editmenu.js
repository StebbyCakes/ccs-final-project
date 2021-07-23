import { Component } from 'react';
import Cookies from 'js-cookie';
import { withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import defaultImage from './../assets/images/default-image.jpeg';


class EditMenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      ...this.props.menuitem,
      isEditing: false,
      show: false,

    }
    this.editMenuItem = this.editMenuItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggleMenuActiveStatus = this.toggleMenuActiveStatus.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
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

        <div className="card menuitem">
        <p className='menu-title'><input type="text" name='name' value={this.state.name} onChange={this.handleInput}/></p>
        {
          this.state.isEditing
          ? <button className="btn btn-dark" type='button' onClick={this.editMenuItem}>Save Edit</button>
          : <button className ="btn btn-dark" type="button" onClick={() => this.setState({ isEditing: true})}>Edit</button>
        }
        <Button variant="warning" onClick={this.handleShow}>
          See Ingredients
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ingredients</Modal.Title>
          </Modal.Header>
          <Modal.Body><div>{ingredients}</div></Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Exit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      </>
    : <>
    <div className="card menuitem">
    <p className='menu-title'>{this.state.name}</p>
      {
        this.state.isEditing
        ? <button className="btn btn-dark" type='button' onClick={this.editMenuItem}>Save Edit</button>
        : <button className ="btn btn-dark" type="button" onClick={() => this.setState({ isEditing: true})}>Edit</button>
      }

    <Button variant="warning" onClick={this.handleShow}>
      See Ingredients
    </Button>

    <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ingredients</Modal.Title>
      </Modal.Header>
      <Modal.Body><div className='included-ingredients'>{ingredients}</div></Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.handleClose}>
          Exit
        </Button>
      </Modal.Footer>
    </Modal>
  </div>

      </>
    }

    </li>
  )}
}

export default withRouter(EditMenuItem);

// {
//   <button className ="toggle-button" type="button" onClick={this.toggleMenuActiveStatus}>
// {
//   is_active
//   ? <button className='btn btn-primary'>Active</button>
//   : <button className='btn btn-danger'>Inactive</button>
// }</button>
// }
