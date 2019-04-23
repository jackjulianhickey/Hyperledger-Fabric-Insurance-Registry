import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ViewOfferItems from './ViewOfferItems'

class ViewOffers extends Component {
  render() {
    return this.props.offers.map((offer) => (
      <ViewOfferItems key = {offer.id} offer = {offer} acceptOffer = {this.props.acceptOffer}/>
    ));

  }
}

//PropTypes
ViewOffers.propTypes = {
  offers: PropTypes.array.isRequired,
  acceptOffer: PropTypes.func.isRequired
}

export default ViewOffers
