import { Component } from 'react';
import Cookies from 'js-cookie';
import EditMenuItem from './editmenu';
import CreateMenuItem from './createmenu';
import {Accordion, Button, Card} from 'react-bootstrap';

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
  }
  componentDidMount() {
    this.fetchMenuItems();
    this.fetchIngredients();
  }

  componentWillUnmount() {
    clearInterval(this.retrieveMenuitems)
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
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(menuitem)
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

  editMenuItem(id, name) {
    const menuitem = {
      id: id,
      name: name
    }
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
      <EditMenuItem
        key={menuitem.id}
        menuitem={menuitem}
        deleteMenuItem={this.deleteMenuItem}
        editMenuItem= {this.editMenuItem} />));

    return (
      <div className='menu-form'>
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
      </div>
    );
  }
}

export default MenuItemList;
