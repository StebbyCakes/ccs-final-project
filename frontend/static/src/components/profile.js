import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      avatar: null,
      preview: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleImage(e){
    let file = e.target.files[0]
    this.setState({
      avatar: file,
    })
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        preview: reader.result,
      });
    }

    reader.readAsDataURL(file);
  }

  async handleSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append('avatar', this.state.avatar);
    formData.append('display_name', this.state.display_name);
    formData.append('user', this.state.user);

    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    }
    const response = await fetch('/api/v1/users/profiles/', options);
    console.log(response)
  }


  render() {
  return (

    <>
    <form>
      <input type="text" name="display_name" value={this.state.display_name} onChange={this.handleInput}/>
      <input type="file" name='avatar' onChange={this.handleImage}/>

      {this.state.avatar
      ? <img src={this.state.preview} alt=""/>
      : null
      }

      <button type='submit'>Save profile!</button>
      <button type="button" className="logout-button" onClick={this.props.handleLogout}>Logout</button>
    </form>
    </>
  );
}
}


export default Profile;
