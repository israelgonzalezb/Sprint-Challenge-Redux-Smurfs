import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions"

const SmurfList = (props) => {

    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <div>
            <ul>
            {props.smurfs.map(smurf => {
                return (
                    <>
                <li>{smurf.name}</li>
                <li>{smurf.age}</li>
                <li>{smurf.height}</li>
                </>
                )
            })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const smurfs = state.smurfs;
    return { smurfs }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);