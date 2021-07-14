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
        // selection: !!Cookies.get('Authorization') ? 'ingredientlist' : 'login'
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
      // this.setState({ selection : 'ingredientlist' });
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
      // this.setState({ selection : 'ingredientlist'});
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
    // this.setState({ selection: 'login' });
    this.props.history.push('/login')
  }
}

  render(){


  return (
    <>

    <Navbar className='navbar-links'>
      <Nav className="nav-links">
        {!Cookies.get('Authorization') && <Link to='/registration'>Registration</Link>}
        {!Cookies.get('Authorization') && <Link to='/login'>Login</Link>}
        <Link className="btn" to='/'>Homepage</Link>
        <Link className="btn" to='/ingredientlist'>Ingredients</Link>
        <Link className="btn" to='/menulist'>Menu</Link>
        <Link className="btn" to='/profile'>Profile</Link>
        <button type="button" className="btn" onClick={this.handleLogout}>Logout</button>
      </Nav>
   </Navbar>


    {/*<Link to='/registration'>Registration</Link>*/}
    {/*<Link to='/login'>Login</Link>*/}

    <Switch>

    <Route path='/registration'>
      <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation}/>
    </Route>
  <Route exact path ='/'>
        <Homepage  handleLogout={this.handleLogout}/>
      </Route>
    <Route path ='/login'>
      <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation}/>
    </Route>

    <Route path='/profile'>
      <Profile/>
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
//
// {!Cookies.get('Authorization') && <Link to='/registration'>Registration</Link>}
// <Link to='/login'>Login</Link>



// <Route path ='/login'>
//   <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation}/>
// </Route>


// this.props.history.push()
