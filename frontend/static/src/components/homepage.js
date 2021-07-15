import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

// const  REACT_APP_SPOONACULAR_API_KEY = process.env. REACT_APP_SPOONACULAR_API_KEY
const { REACT_APP_SPOONACULAR_API_KEY } = process.env

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        joke: '',
    }
    this.fetchJoke = this.fetchJoke.bind(this);
  }

  componentDidMount(){
    this.fetchJoke();
  }

  fetchJoke() {
    const joke = fetch(`https://api.spoonacular.com/food/jokes/random?apiKey=${REACT_APP_SPOONACULAR_API_KEY}`)
    .then((data) => data.json())
    .then((response) => console.log(response))
  }
  //  <Navbar className='navbar-links'>
  //      <Link className="btn" to='/'>Homepage</Link>
  //      <Link className="btn" to='/ingredientlist'>Ingredients</Link>
  //      <Link className="btn" to='/menulist'>Menu</Link>
  //      <Link className="btn" to='/profile'>Profile</Link>
  // </Navbar>
  render() {
    console.log(process.env.REACT_APP_SPOONACULAR_API_KEY)
    return(
      <>

      <p>This is the Homepage</p>


      </>
    )
  }
}



export default Homepage;
