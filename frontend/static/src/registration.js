import { Component } from 'react';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
     }
     this.handleInput = this.handleInput.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

handleInput(event) {
  this.setState({[event.target.name]: event.target.value});
}

handleSubmit(event){
  event.preventDefault();
  this.props.handleRegistration(this.state);
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
     <label htmlFor="password1" className="form-label">Password</label>
     <input onChange={this.handleInput} type="password" className="form-control" id="password1" name='password1'></input>
   </div>
   <div className="mb-3">
     <label htmlFor="password2" className="form-label">Confirm Password</label>
     <input onChange={this.handleInput} type="password" className="form-control" id="password2" name='password2'></input>
   </div>
   <button type="button" className="btn btn-link" onClick={() => this.props.handleNavigation('login')}>Login</button>
   <button type="submit" className="btn btn-primary">REGISTER</button>
 </form>
)}

}

export default Registration
