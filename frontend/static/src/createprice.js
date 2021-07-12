// import {Component} from 'react';
//
// class CreatePricePerPound extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       pricerperpound: [],
//     }
//     this.submitPricePerPound = this.submitPricePerPound.bind(this);
//     this.inputPricePerPound = this.inputPricePerPound.bind(this);
//   }
//
//   submitPrice(event) {
//     event.preventDefault();
//
//     const priceperpound = {
//       pricerperpound: this.state.priceperpound,
//     };
//
//     this.props.priceperpound.addPricePerPound(priceperpound);
//     this.setState({ priceperound: [] });
//   }
//
//   inputPricePerPound(event) {
//     this.setState({[event.target.name]: event.target.value});
//   }
//
//
//
//   render(){
//     return(
//       <form onSubmit={this.submitPricePerPound}>
//         <input type="text" className='' name='pricerperpound' value={this.state.priceperpound} placeholder='Price per pound' onChange={this.inputPricePerPound}></input>
//         <button className='button' type='submit'>Add to List</button>
//       </form>
//     )}
// }
//
// export default CreatePricePerPound
