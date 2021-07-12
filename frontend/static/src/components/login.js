import { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
     }
     this.handleInput = this.handleInput.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

handleInput(event) {
  this.setState({[event.target.name]: event.target.value});
}

handleSubmit(event){
  event.preventDefault();
  this.props.handleLogin(this.state);
    }


   render() {
     return(
     <form onSubmit={this.handleSubmit}>
   <div className="mb-3">
     <label htmlFor="username" className="form-label">Username</label>
     <input onChange={this.handleInput} type="text" className="form-control" id="username" name='username'></input>
   </div>
   <div className="mb-3">
     <label htmlFor="email" className="form-label">Email</label>
     <input onChange={this.handleInput} type="email" className="form-control" id="email" name='email'></input>
   </div>
   <div className="mb-3">
     <label htmlFor="password" className="form-label">Password</label>
     <input onChange={this.handleInput} type="password" className="form-control" id="password" name='password'></input>
   </div>
   <button type="submit" className="btn btn-link">Login</button>
   <button type="button" className="btn btn-primary" onClick={() => this.props.handleNavigation('register')}>Register New User</button>
   </form>
)}
}

export default Login
