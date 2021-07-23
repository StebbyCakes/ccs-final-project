import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const { REACT_APP_SPOONACULAR_API_KEY } = process.env

let menuName = '';
let price ='';
let newPrice = 0;

let menuData = [];

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
    // this.fetchJoke();
    this.fetchData();
    this.fetchIngredients();

}

    componentWillUnmount() {
      clearInterval(this.retrieveMenuitems)
    }
    fetchData() {
      fetch('/api/v1/menu/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => this.setState({ menuitems: data }));
    }

  fetchIngredients() {
      const response = fetch('/api/v1/menu/ingredients/')
      .then(data => data.json())
      .then(json => {
        json.forEach(ingredient => {
          ingredient.price_listings = ingredient.price_listings.reduce((prev, current) => {
            return (new Date(prev.start_date) > new Date(current.start_date))
              ? prev
              : current;
          });
        });
        this.setState({ingredients: json});
      });
    }


  fetchJoke() {
    const joke = fetch(`https://api.spoonacular.com/food/jokes/random?apiKey=${REACT_APP_SPOONACULAR_API_KEY}`)
    .then((data) => data.json())
    .then((response) => console.log(response))
  }

  calculateMenuItemCost(menuitem){
    if (this.state.ingredients.length == 0) return 0;
      const ingredients = Object.entries(menuitem.ingredients); // [[onitions, 2], [tomatoes, 3]]

      return ingredients.reduce((sum, ingredient) => {
        const ingredientName = ingredient[0];
        // console.log('ingredient', ingredient[0])
        const ingredientLb = ingredient[1] * 0.0022046226;
        const ingredientPricePerPound = this.state.ingredients.find(ingredient => ingredient.name === ingredientName).price_listings.price_per_pound;
        const ingredientCost = ingredientLb * (ingredientPricePerPound / 100);
        console.log(ingredientPricePerPound)

        return sum + ingredientCost;
      },0);

    // return menuitem.ingredients.reduce(( sum, ingredient) => {
    //   const globalIngredient = this.state.ingredients.find(item => {
    //     return item.name  == ingredient.name
    //   })
    //   const ingredientLb = (parseFloat(ingredient.weight_of_ingredient) * (0.0022046226))
    //   const ingredientCost = ((ingredientLb) * (parseFloat(globalIngredient.price_per_pound)))
    //   return sum + ingredientCost
    // }, 0);
  }


  render() {
    const data = [];

    const displayMenuItems = this.state.menuitems.map((menuitem) => {
      menuName = menuitem.name
      const price = this.calculateMenuItemCost(menuitem);
      data.push({
        name: menuName,
        price: price,
      });
      newPrice  = parseFloat(price).toFixed(2)
      return (

        <div className='menuCost'>
        {menuName}
        <h1></h1>
        <p></p>
        ${newPrice}
      </div>

    )})
    return(

      <>
      <div className='homepage'>
      <h2 className='foodbook-title'>FoodBook</h2>
        <div >
          <ul >
            {displayMenuItems}
          </ul>
        </div>
        <header>Cost per Plate </header>
        <BarChart
          width= {1200}
          height={500}
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
          <Tooltip/>
          <Bar dataKey="price" fill="#82ca9d" />
        </BarChart>
        </div>
      </>
    )}}

export default Homepage;
