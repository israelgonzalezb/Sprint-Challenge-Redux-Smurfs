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
   constructor(props){
     super(props);
    this.state = {
      smurfName: "",
      smurfAge: "",
      smurfHeight: "" 
    }
    this.addSmurf = this.addSmurf.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.props.getSmurfs();
  }
   addSmurf = e => {
     e.preventDefault();
     this.props.addSmurf({
       name: this.state.smurfName,
       age: this.state.smurfAge,
       height: this.state.smurfHeight
      });
   }

   handleChanges = e => {
     e.preventDefault();
     this.setState({
       [e.target.name]: e.target.value
     })
   }
   
   render(){
    //this.props.getSmurfs();
     return (
       <div className="SmurfsList">
        <ul>
          {this.props.smurfs.map(smurf => (<div><ul>Name: {smurf.name}<li>Age: {smurf.age}</li><li>Height: {smurf.height}</li></ul><br /></div>))}
        </ul>< br /><br />
        <form>
          <input onChange={this.handleChanges} name="smurfName" placeholder="Name" value={this.state.smurfName} /><br />
          <input onChange={this.handleChanges} name="smurfAge" placeholder="Age" value={this.state.smurfAge} /><br />
          <input onChange={this.handleChanges} name="smurfHeight" placeholder="Height" value={this.state.smurfHeight} /><br />
          <button onClick={this.addSmurf}>Add Smurf</button>
        </form>
       </div>
     );
   }
 }


export const ConnectedSmurfsList = connect(mapStateToProps, { getSmurfs, addSmurf })(SmurfsList);
//export default App;
