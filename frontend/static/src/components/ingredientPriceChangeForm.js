import {Component} from 'react';

class IngredientPriceChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_price_per_pound: null,
      price_per_pound: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.findCurrentPriceListing = this.findCurrentPriceListing.bind(this);
  }


  findCurrentPriceListing(ingredient) {
    const current_price_listing = ingredient.price_listings.reduce(function(prev, current) {
      return (new Date(prev.start_date) > new Date(current.start_date))
        ? prev
        : current;
    });

    return current_price_listing.price_per_pound;
  }

  handleSubmit(event) {
    event.preventDefault();
    const ingredients = [...this.props.ingredients];
    const id = parseInt(this.state.ingredientId);
    const index = ingredients.findIndex(ingredient => ingredient.id === id);
    const name = ingredients[index].name;
    let price_listings = ingredients[index].price_listings;
    const priceListing = {
      price_per_pound: (parseFloat(this.state.price_per_pound).toFixed(2)),
      start_date: new Date(),
    }

    price_listings = [priceListing, ...price_listings];

    const ingredient = {
      id: this.state.ingredientId,
      name,
      price_listings,
    }

    this.props.editIngredient(ingredient);


    const current_price_per_pound = this.state.price_per_pound;

    this.setState({
      current_price_per_pound,
      price_per_pound: '',
    });

  }

  handleSelect(event) {
    this.setState({
      [event.target.name]:event.target.value,
      current_price_per_pound: event.target[event.target.selectedIndex].dataset.currentPricePerPound
    });

  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const options = this.props.ingredients.map(ingredient => <option key={ingredient.id} value={ingredient.id} data-current-price-per-pound={this.findCurrentPriceListing(ingredient)}>{ingredient.name}</option>)
    return (
      <>
      <form className='price-change-form' onSubmit={this.handleSubmit}>
        <select type="text" name='ingredientId' value={this.state.ingredientId} onChange={this.handleSelect}>
          <option value="select">Select an ingredient</option>
          {options}
        </select>
        <p className='price-box'>{this.state.current_price_per_pound}</p>
        <input type="text" name='price_per_pound' value={this.state.price_per_pound} placeholder='Enter price per pound' onChange={this.handleInput}></input>
        <button className='add-ingredient' type='submit'>New Price Listing</button>
      </form>
      </>
    )
  }
}

export default IngredientPriceChangeForm;
