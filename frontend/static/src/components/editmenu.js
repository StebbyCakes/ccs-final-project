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
      ingredientName: '',
      ingredientWeight: '',
      availableIngredients: this.props.availableIngredients,
    }

    this.timer = null;

    this.editMenuItem = this.editMenuItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggleMenuActiveStatus = this.toggleMenuActiveStatus.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    // this.handleIngredientWeight = this.handleIngredientWeight.bind(this);
    this.deleteIngredient = this.deleteIngredient.bind(this);
    // this.handleIngredient = this.handleIngredient.bind(this);
  }
  handleClose() {
    this.setState({show: false});
  }

  handleShow() {
    this.setState({show: true});
  }

  handleIngredient(event) {
    const ingredients = {...this.state.ingredients};
    if(event.target.value === '') {
      delete ingredients[event.target.name];
    } else {
      ingredients[event.target.name] = parseInt(event.target.value);
    }

    this.setState({
      ingredients,
    });
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

  this.setState({ [event.target.name]:  event.target.value}, () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const id = this.props.menuitem.id;
      const menuitem = {
        name: this.state.name,
      }
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken')
        },
        body: JSON.stringify(menuitem),
      }

     fetch(`/api/v1/menu/${id}/`, options)
     .then(response => response.json())
     .then(json => {
       this.setState({menuitems: json});
     });
    }, 1000);
  });
}

deleteIngredient(ingredient) {
  
    const ingredients = {...this.state.ingredients};
    delete ingredients[ingredient];


    this.setState({ ingredients });
    this.props.deleteIngredient(this.state.id, ingredients);
 }

// handleIngredientWeight(event) {
//
//   this.setState({ [event.target.name]:  event.target.value}, () => {
//     clearTimeout(this.timer);
//     this.timer = setTimeout(() => {
//       console.log('here')
//     }, 1000);
//   });
// }



toggleMenuActiveStatus() {
  const {id, is_active} = this.state;
  this.props.toggleMenuActiveStatus(id, !is_active);
  this.setState({
    is_active: !is_active,
  });
}

  // <button deleteIngredient={this.deleteIngredient}>X</button>   inside render
render() {
  const menuitem = this.props.menuitem;
  const { is_active, isEditing} = this.state;


  let ingredients = Object.entries(this.state.ingredients)
  ingredients = ingredients.map((ingredient, index) => (
    <li key={index} className='ingredients-on-menu'>

      <span className='ingredient-name'>{ingredient[0]}</span>
      <div>
        <input type="text" value={ingredient[1]} onChange={this.handleInput}/>
      </div>
      <button onClick={() => this.deleteIngredient(ingredient[0])}>x</button>


        </li>
  ));


  return(
    <li className='list'>
        <div className="card menuitem">
          <div>
            <input type="text" name='name' value={this.state.name} onChange={this.handleInput}/>
          </div>



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
