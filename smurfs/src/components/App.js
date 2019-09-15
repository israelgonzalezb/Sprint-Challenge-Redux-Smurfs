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
   state = {
     smurfName: "",
     smurfAge: "",
     smurfHeight: "" 
   }
   render(){
    this.props.getSmurfs();
     return (
       <div className="SmurfsList">
        <ul>
          {this.props.smurfs.map(smurf => (<ul>Name: {smurf.name}<li>Age: {smurf.age}</li><li>Height: {smurf.height}</li></ul>))}
        </ul>< br />
        <form>
          <input onChange={this.handleChanges} placeholder="Name" value={this.state.smurfName} /><br />
          <input onChange={this.handleChanges} placeholder="Age" value={this.state.smurfAge} /><br />
          <input onChange={this.handleChanges} placeholder="Height" value={this.state.smurfHeight} /><br />
          <button onClick={this.addSmurf}>Add Smurf</button>
        </form>
       </div>
     );
   }
 }


export const ConnectedSmurfsList = connect(mapStateToProps, { getSmurfs })(SmurfsList);
//export default App;
