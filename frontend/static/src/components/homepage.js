import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { REACT_APP_SPOONACULAR_API_KEY } = process.env
const data = [
  {
    name: "Page A",
    uv: 4000,

  },
  {
    name: "Page B",
    uv: 3000,

  },
  {
    name: "Page C",
    uv: 2000,

  },
  {
    name: "Page D",
    uv: 2780,

  },
  {
    name: "Page E",
    uv: 1890,

  },
  {
    name: "Page F",
    uv: 2390,

  },
  {
    name: "Page G",
    uv: 3490,

  }
];

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
        <div className='menuCost'>
        {menuitem.name}
        <h1></h1>
        ${this.calculateMenuItemCost(menuitem)}
        <p></p>
      </div>
    )})

    return(
      <>
        <div >
          <ul >
            {displayMenuItems}
          </ul>
        </div>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>

      </>
    )}}

export default Homepage;
