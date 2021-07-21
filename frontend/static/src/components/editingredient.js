import { Component } from 'react';
import Cookies from 'js-cookie';

class EditIngredient extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props.ingredient,
      price_per_pound: '',
      isEditing: false,
    }

    this.editIngredient = this.editIngredient.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggleIngredientActiveStatus = this.toggleIngredientActiveStatus.bind(this);
    this.findCurrentPriceListing = this.findCurrentPriceListing.bind(this);

  }

  componentDidMount() {
    const current_price_listing = this.findCurrentPriceListing();
    this.setState({price_per_pound: current_price_listing.price_per_pound});
  }

  componentDidUpdate(prevProps) {

    if(this.props.ingredient.price_listings.length !== prevProps.ingredient.price_listings.length) {
      const current_price_listing = this.findCurrentPriceListing();
      this.setState({price_per_pound: current_price_listing.price_per_pound});
    }
  }

  editIngredient() {
    this.setState({isEditing: false});

    const ingredient = {...this.state};
    delete ingredient.isEditing;
    delete ingredient.price_per_pound;

    const current_price_listing = this.findCurrentPriceListing();
    const index = ingredient.price_listings.indexOf(current_price_listing);
    ingredient.price_listings[index].price_per_pound = parseInt(this.state.price_per_pound);
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
    const current_price_listing = this.props.ingredient.price_listings.reduce(function(prev, current) {
      return (new Date(prev.start_date) > new Date(current.start_date))
        ? prev
        : current;
    });
    // is this info just for the db and future graph or need to display in ingredients?

    return current_price_listing;
  }

  render() {
    const {name, price_per_pound, is_active, isEditing} = this.state;

    return (<tr>
      <td><input type="text" name='name' value={name} onChange={this.handleInput} disabled={!isEditing}/></td>
      <td><input type="text" name='price_per_pound' value={price_per_pound} onChange={this.handleInput} disabled={!isEditing}/></td>
        <td>{
        this.state.isEditing
          ? <button className="btn btn-dark" type='button' onClick={this.editIngredient}>Save Edit</button>
          : <button className="btn btn-dark" type="button" onClick={() => this.setState({isEditing: true})}>Edit</button>
      }</td>
    <td><button className='toggle-button' onClick={this.toggleIngredientActiveStatus}>{
          is_active
            ? <button className='btn btn-primary'>Active</button>
            : <button className='btn btn-danger'>Inactive</button>
        }</button></td>
    </tr>)
  }
}

export default EditIngredient;
