import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

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
      const ingredientLb = (parseFloat(ingredient.weight_of_ingredient) * (0.00220462))
      const ingredientCost = ( ingredientLb / (parseFloat(globalIngredient.price_per_pound)))
      return sum + ingredientCost
    }, 0)
    // use reduce
    // iterate over all of the ingredients on the menuitem
    //   use the "name" string to get the global ingredient
    //   get the price_per_pound for the ingredient
    //   do math
  }
  render() {
    const displayMenuItems = this.state.menuitems.map((menuitem) => {
      console.log(this.calculateMenuItemCost(menuitem))
      return (
        <div>
        {menuitem.name}
        {this.calculateMenuItemCost(menuitem)}
      </div>
    )

    })

    return(
      <>

      {
        this.joke
        ?  <button className='button' type='button' onClick={this.joke}>Click me</button>
        : <p>{this.joke}</p>
    }
      {displayMenuItems}


      </>
    )
  }
}



export default Homepage;
// import React, { PureComponent } from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//
// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
//
// export default class Homepage extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';
//
//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="pv" fill="#8884d8" />
//           <Bar dataKey="uv" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }
