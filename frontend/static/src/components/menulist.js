import { Component } from 'react';
import Cookies from 'js-cookie';
import EditMenuItem from './editmenu';
import CreateMenuItem from './createmenu';
import {Accordion, Button, Card} from 'react-bootstrap';
import IngredientsModal from './Modal.js'

class MenuItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuitems: [],
      ingredients: [],
    }
    this.deleteMenuItem = this.deleteMenuItem.bind(this);
    this.editMenuItem = this.editMenuItem.bind(this);
    this.fetchMenuItems = this.fetchMenuItems.bind(this);
    this.addMenuItem = this.addMenuItem.bind(this);
    this.fetchIngredients = this.fetchIngredients.bind(this);
    this.toggleMenuActiveStatus = this.toggleMenuActiveStatus.bind(this);
  }
  componentDidMount() {
    this.fetchMenuItems();
    this.fetchIngredients();
  }

  componentWillUnmount() {
    clearInterval(this.retrieveMenuitems)
  }

  toggleMenuActiveStatus(id, status) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify({is_active: status}),
    }
    fetch(`/api/v1/menu/${id}/`, options).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
        const menuitems = [...this.state.menuitems];
        const index = menuitems.findIndex(menuitem => menuitem.id === id);
        menuitems[index].is_active = status;
        this.setState({ menuitems });
      });
  }


  fetchMenuItems() {
    fetch('/api/v1/menu/').then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data => this.setState({menuitems: data}));
  }

  fetchIngredients() {
    const response = fetch('/api/v1/menu/ingredients/').then(data => data.json()).then(json => this.setState({ingredients: json}))
  }

  deleteMenuItem(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      }
    }

    fetch(`/api/v1/menu/${id}`, options).then(response => {
      const menuitems = [...this.state.menuitems];
      const index = menuitems.findIndex(menuitem => menuitem.id === id);
      menuitems.splice(index, 1);
      this.setState({menuitems});
    }).catch((error) => {
      console.log.error('Error:', error);
    });
  }

  addMenuItem(menuitem) {
    let formData = new FormData();
    if(menuitem instanceof File) {
      formData.append('image', menuitem.image);
    }

    formData.append('name', menuitem.name);
    formData.append('menu_price', menuitem.menu_price);
    formData.append('ingredients', JSON.stringify(menuitem.ingredients));


    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: formData,
    }
    fetch('/api/v1/menu/', options).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
        // handle the error
      }
      return response.json();
    }).then(data => {
      const menuitems = [
        ...this.state.menuitems,
        data
      ];
      this.setState({menuitems});
    }).catch()
  }

  editMenuItem(menuitem) {
    const {id} = menuitem;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(menuitem)
    }
    fetch(`/api/v1/menu/${id}/`, options).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const menuitems = [...this.state.menuitems];
      const index = id
      // menuitems[index] = menuitem;
      this.setState({menuitems});
    });
  }

  render() {

    const menuItems = this.state.menuitems.map((menuitem) => (
    // const menu_price = {this.props.menu_price}
      // ingredients = this.state.ingredients
      // ingredients={this.ingredients}
      <EditMenuItem
        key={menuitem.id}
        menuitem={menuitem}
        toggleMenuActiveStatus={this.toggleMenuActiveStatus}
        editMenuItem= {this.editMenuItem} />));

    return(
    <>
      <div className='menu-form'>
        <h2 className='menu-list' >Menu Item List</h2>
        <Accordion>
          <Card className='accordion-card'>
            <Card.Header className='accordion-header'>
              <Accordion.Toggle as={Button}  eventKey="0">
                <span className='accordion-toggle'>
                  Create a Menu Item
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className='end-of-form'>
                <CreateMenuItem availableIngredients={this.state.ingredients} addMenuItem={this.addMenuItem}/>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <ul className='container menuitems'>
          {menuItems}

        </ul>
        <IngredientsModal />

      </div>
      </>
    );
  }
}

export default MenuItemList;
