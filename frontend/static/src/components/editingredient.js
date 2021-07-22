import { Component } from 'react';
import Cookies from 'js-cookie';

class EditIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.ingredient,
      price_per_pound: '',
      isEditing: false,
      new_price_per_pound: '',
      new_start_date: new Date().toISOString().split('T')[0],
    }
    this.editIngredient = this.editIngredient.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggleIngredientActiveStatus = this.toggleIngredientActiveStatus.bind(this);
    this.findCurrentPriceListing = this.findCurrentPriceListing.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }
  componentDidMount() {
    const current_price_listing = this.findCurrentPriceListing();
    this.setState({
      price_per_pound: current_price_listing.price_per_pound,
      start_date: new Date(current_price_listing.start_date).toISOString().split('T')[0],
    });
  }
  componentDidUpdate(prevProps) {
    if(this.props.ingredient.price_listings.length !== prevProps.ingredient.price_listings.length) {
      const current_price_listing = this.findCurrentPriceListing();
      this.setState({
        ...this.props.ingredient,
        price_per_pound: current_price_listing.price_per_pound,
        start_date: current_price_listing.start_date,
      });
    }
  }
  handlePriceChange(event) {
    // event.preventDefault();
    const {id, is_active, name, new_price_per_pound, new_start_date, price_listings} = this.state;
    price_listings.push({
      start_date: new_start_date,
      price_per_pound: parseInt(this.state.new_price_per_pound.replace('.', '')),
    });

    console.log('price_listings', price_listings)
    const ingredient = {
      id,
      is_active,
      name,
      price_listings,
    };
    this.props.editIngredient(ingredient);
    const current_price_listing = this.findCurrentPriceListing();
    this.setState({
      price_per_pound: current_price_listing.price_per_pound,
      start_date: new Date(current_price_listing.start_date).toISOString().split('T')[0],
      new_price_per_pound: '',
      new_start_date: new Date().toISOString().split('T')[0],
    });
  }

  editIngredient() {
    this.setState({isEditing: false});
    const ingredient = {...this.state};
    ingredient.price_per_pound = parseInt(ingredient.price_per_pound);
    delete ingredient.isEditing;
    delete ingredient.price_per_pound;
    delete ingredient.new_price_per_pound;
    delete ingredient.new_start_date;
    console.log(ingredient);
    const current_price_listing = this.findCurrentPriceListing();
    console.log(current_price_listing);
    const index = ingredient.price_listings.indexOf(current_price_listing);
    console.log(index);
    ingredient.price_listings[index].price_per_pound = parseFloat(this.state.price_per_pound) * 100;
    ingredient.price_listings[index].start_date = this.state.start_date;
    this.props.editIngredient(ingredient);
  }
  toggleIngredientActiveStatus() {
    const {id, is_active} = this.state;
    this.props.toggleIngredientActiveStatus(id, !is_active);
    this.setState({
      is_active: !is_active,
    });
  }
  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  findCurrentPriceListing() {
    const current_price_listing = this.state.price_listings.reduce(function(prev, current) {
      return (new Date(prev.start_date) > new Date(current.start_date))
        ? prev
        : current;
    });
    // is this info just for the db and future graph or need to display in ingredients?
    console.log('here', current_price_listing)
    return current_price_listing;
  }
  render() {
    const {name, price_per_pound, start_date, is_active, isEditing} = this.state;
    return (<tr>
      <td><input type="text" name='name' value={name} onChange={this.handleInput} disabled={!isEditing}/></td>
      <td><input type="text" name='price_per_pound' value={price_per_pound} onChange={this.handleInput} disabled={!isEditing}/></td>
      <td><input type="date" name='start_date' value={start_date} onChange={this.handleInput} disabled={!isEditing}/></td>
      <td className="d-flex">{
        this.state.isEditing
          ? <button className="btn btn-dark" type='button' onClick={this.editIngredient}>Save</button>
          : <button className="btn btn-dark" type="button" onClick={() => this.setState({isEditing: true})}>Edit</button>
      }
        <button className='toggle-button' onClick={this.toggleIngredientActiveStatus}>{
          is_active
            ? <button className='btn btn-primary'>Active</button>
            : <button className='btn btn-danger'>Inactive</button>
        }</button>
      </td>
    <td><input type="text" name="new_price_per_pound" value={this.state.new_price_per_pound} onChange={this.handleInput}/></td>
    <td><input type="date" name="new_start_date" value={this.state.new_start_date} onChange={this.handleInput} onChange={this.handleInput}/></td>
    <td><button type="button" className="btn btn-dark" onClick={this.handlePriceChange}>Add</button></td>
    </tr>)
  }
}

export default EditIngredient;
