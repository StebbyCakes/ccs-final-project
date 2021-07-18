import { Component } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import Registration from './registration';
import Login from './login';
import IngredientList from './ingredientlist';
import Profile from './profile';
import MenuItemList from './menulist';
import Homepage from './homepage';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PrivateRoute from './privateroute'


class App extends Component{
  constructor(props) {
    super(props);
      this.state = {
      }
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.handleRegistration = this.handleRegistration.bind(this);
      this.handleNavigation = this.handleNavigation.bind(this);

  }


  async handleLogin(user){
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
    },
      body: JSON.stringify(user),
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/login/', options).catch(handleError);

    if(response.ok){
      const data = await response.json().catch(handleError);
      Cookies.set('Authorization', `Token ${data.key}`);
      this.props.history.push('/menulist')
    }
  }

  async handleRegistration(user){
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken' : Cookies.get('csrftoken')
      },
      body: JSON.stringify(user),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/registration/', options).catch(handleError);

    if(response.ok){
      const data = await response.json().catch(handleError);

      Cookies.set('Authorization', `Token ${data.key}`);
      this.props.history.push('/menulist')
    }
  }

  handleNavigation(selection){
    this.setState({ selection });
  }


async handleLogout(){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
  };
  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/logout/', options).catch(handleError);

  if(response.ok){
    Cookies.remove('Authorization');
    this.props.history.push('/')
  }
}

  render(){


  return (
    <>

    <Navbar className='navbar-links'>
      <Nav className="mr-auto">
        {!Cookies.get('Authorization') && <Link className= 'btn btn-primary' to='/registration'>Registration</Link>}
        {!Cookies.get('Authorization') && <Link className= 'btn btn-primary' to='/'>Login</Link>}
        {Cookies.get('Authorization') && <Link className="btn btn-outline-warning" to='/homepage'>Homepage</Link>}
        {Cookies.get('Authorization') && <Link className="btn btn-outline-warning" to='/ingredientlist'>Ingredients</Link>}
        {Cookies.get('Authorization') && <Link className="btn btn-outline-warning" to='/menulist'>Menu</Link>}
        {Cookies.get('Authorization') && <button type="button" className="btn btn-outline-warning" onClick={this.handleLogout}>Logout</button>}

      </Nav>
   </Navbar>

    <Switch>

    <Route path='/registration'>
      <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation}/>
    </Route>
  <Route exact path ='/'>
        <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation}/>
      </Route>
  <Route path ='/homepage'>
    <Homepage/>
  </Route>
    <Route path='/ingredientlist'>
      <IngredientList/>
    </Route>
    <Route path='/menulist'>
      <MenuItemList/>
    </Route>

  </Switch>
    </>
  );
}
}

export default withRouter(App);
