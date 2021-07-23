import {Component} from 'react';
import Cookies from 'js-cookie';

import defaultImage from './../assets/images/default-image.jpeg';

class CreateMenuItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      availableIngredients: this.props.availableIngredients,

      preview: '',
      name: '',
      menu_price: '',
      ingredients: {},
      image: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleIngredient = this.handleIngredient.bind(this);
    this.handleImage = this.handleImage.bind(this);
    // this.handleIMGSubmit = this.handleIMGSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.availableIngredients !== prevProps.availableIngredients) {
      this.setState({
        availableIngredients: this.props.availableIngredients,
      });
    }
  }

  handleImage(event){
    let file = event.target.files[0]
    this.setState({
      image: file,
    })
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        preview: reader.result,
      });
    }

    reader.readAsDataURL(file);
  }

  // async handleIMGSubmit(event){
  //   event.preventDefault();
  //   let formData = new FormData();
  //   formData.append('menuImg', this.state.menuImg);
  //   formData.append('menuitem', this.state.menuitem);
  //
  //   const options = {
  //     method: 'PUT',
  //     headers: {
  //       'X-CSRFToken': Cookies.get('csrftoken'),
  //     },
  //     body: formData,
  //   }
  //   const response = await fetch('/api/v1/menu/', options);
  //   this.props.history.push('/menulist')
  //   console.log(response)
  // }

  handleSubmit(event) {
    event.preventDefault();

    const {name, ingredients, menu_price, image} = this.state;

    const menuitem = {
      name,
      ingredients,
      menu_price: Number(menu_price) * 100,
      image,
    };

    this.props.addMenuItem(menuitem);

    this.setState({
      name: '',
      menu_price: '',
      ingredients: {},
      image: null,
    });
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleIngredient(event) {
    const ingredients = {...this.state.ingredients};
    if(event.target.value === '') {
      delete ingredients[event.target.name];
    } else {
      ingredients[event.target.name] = parseInt(event.target.value);
    }

    this.setState({
      ingredients,
    });
  }

  render(){
    const ingredients = this.state.availableIngredients?.map(ingredient =>
      <>
        <li key={ingredient.id} className="mb-3">
          <label htmlFor={ingredient.name}>{ingredient.name}</label>
          <input type="text" id={ingredient.name} name={ingredient.name} value={this.state[ingredient.name]} placeholder='Weight in Grams' onChange={this.handleIngredient}/>
        </li>
      </>
    );
    return(
      <>
      <form  onSubmit={this.handleSubmit}>
        <div className='ingredient-form'>
          <input className='ingredient-input' type="text" name='name' value={this.state.name} placeholder="Menu Item Name" onChange={this.handleInput} />
          <input className='ingredient-input' type="text" name='menu_price' value={this.state.menu_price} placeholder="Price on Menu" onChange={this.handleInput} />
          <button className='add-ingredient' type="submit">Create menu item</button>
        </div>
        <ul className='ingredient-grid'>
          {ingredients}
        </ul>
        <img className='preview-img' src={defaultImage} alt=""/>
          <input type="file" name='menuImg' onChange={this.handleImage}/>
          {this.state.menuImg
          ? <img className='img' src={this.state.preview} alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmartialartsplusinc.com%2Fhome%2Fdefault-image%2F&psig=AOvVaw2_wxZFvSEbu5shUuae6NFO&ust=1627012298162000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMj6nbLj9fECFQAAAAAdAAAAABAD"/>
          : null
          }


        </form>

      </>
    )}
}

export default CreateMenuItem;
