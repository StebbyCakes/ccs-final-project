import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  //  <Navbar className='navbar-links'>
  //      <Link className="btn" to='/'>Homepage</Link>
  //      <Link className="btn" to='/ingredientlist'>Ingredients</Link>
  //      <Link className="btn" to='/menulist'>Menu</Link>
  //      <Link className="btn" to='/profile'>Profile</Link>
  // </Navbar>
  render() {
    return(
      <>

      <p>This is the Homepage</p>


      </>
    )
  }
}



export default Homepage;
