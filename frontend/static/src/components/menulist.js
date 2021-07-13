import { Component } from 'react';
import Cookies from 'js-cookie';
import EditMenuItem from './editmenu';
import CreateMenuItem from './createmenu';


class MenuItemList extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuitems: [],
    }
    this.deleteMenuItem = this.deleteMenuItem.bind(this);
    this.editMenuItem = this.editMenuItem.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.addMenuItem = this.addMenuItem.bind(this);
  }
  componentDidMount() {
      this.fetchData();
    }

    componentWillUnmount() {
      clearInterval(this.retrieveMenuitems)
    }
    fetchData() {
      fetch('/api/v1/menuitems/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => this.setState({ menuitems: data }));
    }


    deleteMenuItem(id) {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
      }

      fetch(`/api/v1/menuitems/${id}`, options)
        .then(response => {
          const menuitems = [ ...this.state.menuitems ];
          const index = menuitems.findIndex(menuitem => menuitem.id === id);
          menuitems.splice(index, 1);
          this.setState({ menuitems });
        })
        .catch((error) => {
          console.log.error('Error:', error);
        });
    }

    addMenuItem(menuitem) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(menuitem),
      }
      fetch('/api/v1/menuitems/', options)
        .then(response => {
          if(!response.ok) {
            throw new Error('Network response was not ok');
            // handle the error
          }
          return response.json();
        })
        .then(data => {
          const menuitems = [...this.state.menuitems, data];
          this.setState({menuitems});
        })
        .catch()
    }

    editMenuItem(id, menuitem) {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(menuitem),
      }
      fetch(`/api/v1/menuitems/${id}/`, options)
        .then(response => {
          if(!response.ok) {
            throw new Error('Network response was not ok');
          }
          const menuitems = [ ...this.state.menuitems];
          const index = menuitems.findIndex(menuitem => menuitem.id === id);
          menuitems[index] = menuitem;
          this.setState({ menuitems });
        });
    }

    render() {

      const displayMenuItems = this.state.menuitems.map((menuitem) => (
        <EditMenuItem key={menuitem.id} menuitem={menuitem} deleteMenuItem={this.deleteMenuItem} editMenuItem={this.editMenuItem} />
      ));
      return(
          <>
          <div className="menuitem-list">
            <ul>{displayMenuItems}</ul>
              <section>
                <CreateMenuItem addMenuItem={this.addMenuItem}/>
              </section>
          </div>
          </>
      )
    }
}

export default MenuItemList;
