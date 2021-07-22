import {Component} from 'react';
import {NavLink} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

class NavMenu extends Component {
  render() {
    return (
      <Navbar className='navbar-links'>
        {
          this.props.isAuth
          ?
            <>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/ingredients'>Ingredients</NavLink>
            <button className="btn btn-link" onClick={this.props.handleLogout}>Logout</button>
            </>

          :
            <>
              <NavLink to='/'>Login</NavLink>
              <NavLink to='/registration'>Registration</NavLink>
            </>
        }
     </Navbar>
    )
  }
}

export default NavMenu;
