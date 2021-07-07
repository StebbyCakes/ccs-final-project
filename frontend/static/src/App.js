import { Component } from 'react';
import './App.css';
import Cookies from 'js-cookie';
import Registration from './registration';
import Login from './login';
import Homepage from './homepage';
import Button from 'react-bootstrap/Button';

class App extends Component{
  constructor(props) {
    super(props);
      this.state = {
        selection: !! Cookies.get('Authorization') ? 'homepage' : 'login'
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
    this.setState({ selection : 'homepage' });
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
    this.setState({ selection : 'homepage'});
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
    this.setState({ selection: 'login' });
  }
}
  render(){


  return (
    <>
    {this.state.selection === 'login' && <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation}/>}
    {this.state.selection === 'register' && <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation}/>}
    {this.state.selection === 'homepage' && <Homepage handleLogout={this.handleLogout}/>}
    {this.state.selection === 'homepage' && <button type="submit" className="btn btn-primary" onClick={this.handleLogout}>LOGOUT</button>}
    </>
  );
}
}

export default App;
