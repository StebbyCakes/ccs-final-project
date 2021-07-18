import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { REACT_APP_SPOONACULAR_API_KEY } = process.env

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        joke: '',
        menuitems: [],
        ingredients: [],
    }
    this.fetchJoke = this.fetchJoke.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.fetchIngredients = this.fetchIngredients.bind(this);
    this.calculateMenuItemCost = this.calculateMenuItemCost.bind(this);
  }

  componentDidMount(){
    this.fetchJoke();
    this.fetchData();
    this.fetchIngredients();
  }

    componentWillUnmount() {
      clearInterval(this.retrieveMenuitems)
    }
    fetchData() {
      fetch('/api/v1/menuitems/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => this.setState({ menuitems: data }));
    }

  fetchIngredients() {
      const response = fetch('/api/v1/ingredients/')
      .then(data => data.json())
      .then(json => this.setState({ingredients: json}))
    }

  fetchJoke() {
    const joke = fetch(`https://api.spoonacular.com/food/jokes/random?apiKey=${REACT_APP_SPOONACULAR_API_KEY}`)
    .then((data) => data.json())
    .then((response) => console.log(response))
  }

  calculateMenuItemCost(menuitem){
    if (this.state.ingredients.length == 0) return 0;
    return menuitem.ingredients.reduce(( sum, ingredient) => {
      const globalIngredient = this.state.ingredients.find(item => {
        return item.name  == ingredient.name
      })
      const ingredientLb = (parseFloat(ingredient.weight_of_ingredient) * (0.0022046226))
      const ingredientCost = ((ingredientLb) * (parseFloat(globalIngredient.price_per_pound)))
      return sum + ingredientCost
    }, 0)
  }

  render() {
    const displayMenuItems = this.state.menuitems.map((menuitem) => {
      console.log(this.calculateMenuItemCost(menuitem))
      return (
        <div>
        {menuitem.name}
        {this.calculateMenuItemCost(menuitem)}
      </div>
    )})

    return(
      <>
        <div>
          {displayMenuItems}
        </div>

      </>
    )}}

export default Homepage;
