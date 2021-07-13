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


class App extends Component{
  constructor(props) {
    super(props);
      this.state = {
        // selection: !! Cookies.get('Authorization') ? 'ingredientlist' : 'login'
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
    {this.state.selection === 'ingredientlist' && <button type="submit" className="btn btn-primary" onClick={this.handleLogout}>LOGOUT</button>}

    <Link to='/registration'>Registration</Link>
    <Link to='/login'>Login</Link>

    <Switch>

      <Route path='/registration'>
        <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation}/>
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


      <Route exact path ='/'>
        <Homepage  handleLogout={this.handleLogout}/>
      </Route>
    </Switch>
    </>
  );
}
}

export default withRouter(App);



// this.props.history.push()
