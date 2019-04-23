import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class ViewOfferItems extends Component {

  getStyle = () => {
    return {
      background: '#5B5B5B',
      padding: '15px',
      borderBottom: '1px #000000 solid',
      color: 'white'
    }

  }

  submit = () => {
    this.props.acceptOffer(this.props.offer)
  }


  render() {
    return (
      <div style={this.getStyle()}>
        <p>Asset: { this.props.offer.asset }      Monthly Cost: { this.props.offer.monthlyCost }</p>
        <button onClick={this.submit}>Accept Offer</button>
      </div>
    );
  }

}

//PropTypes
ViewOfferItems.propTypes = {
  offer: PropTypes.object.isRequired,
  acceptOffer: PropTypes.func.isRequired
}

export default ViewOfferItems
