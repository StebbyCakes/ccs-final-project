import { Component } from 'react';
import Cookies from 'js-cookie';

class EditMenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      id: this.props.menuitem.id,
      name: this.props.menuitem.name,
      ingredients: this.props.ingredients,
      menuImg: null,
      preview: '',
    }
    this.editMenuItem = this.editMenuItem.bind(this);
    this.inputMenuItem = this.inputMenuItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleImage(e){
    let file = e.target.files[0]
    this.setState({
      menuImg: file,
    })
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        preview: reader.result,
      });
    }

    reader.readAsDataURL(file);
  }

  async handleSubmit(event){
    event.preventDefault();
    let formData = new FormData();
    formData.append('menuImg', this.state.menuImg);
    formData.append('menuitems', this.state.menuitems);

    const options = {
      method: 'PUT',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    }
    const response = await fetch(`/api/v1/menu/${this.state.id}/`, options);
    console.log(response)

  }

editMenuItem() {
  this.setState({ isEditing: false});

  const menuitem = {
    id: this.state.id,
    name: this.state.name,
  }

  this.props.editMenuItem(menuitem.id, menuitem.name);
}

inputMenuItem(event){
  this.setState({ [event.target.name]:  event.target.value});
}

render() {
  const menuitem = this.props.menuitem;
  return(
    <li className='list'>
    {
      this.state.isEditing
      ?
        <>
          <input type="text" name='name' value={this.state.name} onChange={this.inputMenuItem}/>
          <p type ='text' name='ingredients' value={this.state.ingredients}></p>
          {/*<input type="text" name='ingredient' value={this.props.ingredient} onChange={this.inputMenuItem} />*/}
          <input type="text" name='weight_of_ingredient' value={this.state.weight_of_ingredient} onChange={this.inputMenuItem}/>
          <input type="submit" name='name' value={this.ingredients} onChange={this.deleteIngredient}/>
            <form onSubmit={this.handleSubmit}>

              <input type="file" name='menuImg' onChange={this.handleImage}/>
              <button type='submit'>Save</button>
              {this.state.menuImg
              ? <img className='img'src={this.state.preview} alt=""/>
              : null
              }
            </form>
        </>

      : <p>
          {this.state.name}
          {this.state.ingredients}
          {this.state.weight_of_ingredient}
        </p>
    }
    {
      this.state.isEditing
      ? <button className="btn btn-dark" type='button' onClick={this.editMenuItem}>Save Edit</button>
      : <button className ="btn btn-dark" type="button" onClick={() => this.setState({ isEditing: true})}>Edit</button>
    }
    {<button className ="btn btn-danger" type="button" onClick={() => this.props.deleteMenuItem(menuitem.id)}>x</button>}
    </li>
  )}
}

export default EditMenuItem;
