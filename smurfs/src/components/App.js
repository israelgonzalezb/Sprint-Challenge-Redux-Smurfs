import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addSmurf, getSmurfs } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const mapStateToProps = state => { return { smurfs: state.smurfs } };

 class SmurfsList extends Component {
   
   render(){
    this.props.getSmurfs();
     return (
       <div className="SmurfsList">
        <ul>
          {this.props.smurfs.map(smurf => (<li>{smurf.name}</li>))}
        </ul>
       </div>
     );
   }
 }
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfsList />
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}
*/

export default connect(mapStateToProps, { getSmurfs })(SmurfsList);
//export default App;
