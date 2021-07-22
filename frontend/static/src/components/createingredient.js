import {Component} from 'react';
import Cookies from 'js-cookie';
// import CreatePricePerPound from './createprice.js';

class CreateIngredient extends Component {
  constructor(props) {
     super(props);
     this.state = {
       name: '',
       price_per_pound: '',
       start_date: new Date(),
     }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleInput = this.handleInput.bind(this);
   }
   handleSubmit(event) {
     event.preventDefault();
     const ingredient = {
       name: this.state.name,
       price_listings: [
         {
           price_per_pound: parseInt(this.state.price_per_pound.replace('.', '')),
           start_date: this.state.start_date,
         },
       ]
     };
     this.props.addIngredient(ingredient);
     this.setState({name: '', price_per_pound: '', start_date: new Date()});
   }
   // does start date automatically know what date it is and saves it to db?
   handleInput(event) {
     this.setState({
       [event.target.name]: event.target.value
     });
   }
   render() {
     return (
       <>
       <form className='ingredient-form' onSubmit={this.handleSubmit}>
         <input className='ingredient-input' type="text" name='name' value={this.state.name} placeholder="Enter ingredient name" onChange={this.handleInput}></input>
         <input className='ingredient-input' type="text" name='price_per_pound' value={this.state.price_per_pound} placeholder='Enter price per pound' onChange={this.handleInput}></input>
         <button className='add-ingredient' type='submit'>Add</button>
       </form>
       </>
     )
   }
}

export default CreateIngredient
