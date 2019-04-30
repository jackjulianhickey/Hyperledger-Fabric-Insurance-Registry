import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {ClaimItems} from "./ClaimItems";

class Claims extends Component {

  getStyle = () => {
    return {
     width: '300px',
     overflow: 'hidden',
     display: 'flex'
    }
  }
  render() {
    return this.props.Claims.map((claim) => (
      <ClaimItems key = {claim.id} claim = {claim} selectedClaim = {this.props.selectedClaim}/>
    ));

  }
}

//PropTypes
Claims.propTypes = {
  Claims: PropTypes.array.isRequired,
  selectedClaim: PropTypes.func.isRequired
}

export default Claims
