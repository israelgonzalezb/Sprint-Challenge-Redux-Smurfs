import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addSmurf, getSmurfs } from "../actions";

const SmurfForm = props => {
  const initialSmurf = { name: "", age: "", height: "" };
  const [newSmurf, setNewSmurf] = useState(initialSmurf);
  console.log("SMURF FORM PROPS", props);

  const changeHandler = e => {
    e.preventDefault();
    setNewSmurf(
      Object.assign({}, newSmurf, { [e.target.name]: e.target.value })
    );
    console.log(newSmurf);
  };

  const submitHandler = async e => { // !!! This had to be made async so that the other connected component would get the expected new state, instead of previous state
    e.preventDefault();
    console.log("Sending this to addSmurf", newSmurf);
    await props.addSmurf(newSmurf);
    await props.getSmurfs();
    setNewSmurf(initialSmurf);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={changeHandler}
          value={newSmurf.name}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          onChange={changeHandler}
          value={newSmurf.age}
        />
        <input
          type="number"
          name="height"
          placeholder="height"
          onChange={changeHandler}
          value={newSmurf.height}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const smurfs = state.smurfs;
  return { smurfs };
};

export default connect(mapStateToProps, { addSmurf, getSmurfs })(SmurfForm);
