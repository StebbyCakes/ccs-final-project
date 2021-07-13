import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import { Route, Switch, withRouter, Link} from 'react-router-dom';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <>

      <p>Homepage</p>

    <button type="submit" className="btn btn-primary" onClick={this.handleLogout}>LOGOUT</button>
      </>
    )
  }
}



export default Homepage;
