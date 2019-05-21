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
    let assetStyle = {
      divNotHover: {
        display: 'inline-block',
        background: '#333',
        width: '350px',
        height: '130px',
        textAlign: 'left',
        padding: '20px',
        margin: '20px',
        border: '5px solid #333',
        color: 'white'
      },
      button: {
        padding: '3px',
        margin: '0px',
        cursor: 'pointer',
        fontSize: '16px',
      }

    }
    return (
      <div style={assetStyle.divNotHover}>
        <p>Asset: { this.props.offer.asset }</p>
        <p>Monthly Cost: { this.props.offer.monthlyCost }</p>
        <button style = {assetStyle.button} onClick={this.submit}>Accept Offer</button>
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
