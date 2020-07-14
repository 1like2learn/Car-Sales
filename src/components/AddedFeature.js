import React from 'react';
import { connect } from "react-redux"

import { removeFeature } from "../actions/featuresActions"
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        onClick={removeFeature}
      className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature)