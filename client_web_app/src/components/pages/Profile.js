import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Profile extends Component {
  render() {
    let profileStyle = {
      background: '#333',
      width: '300px',
      padding: '20px',
      margin: '20px',
      border: '5px solid #333',
      color: 'white'

  }
    return (
        <div style = { profileStyle }>
            <p>Name: {this.props.user.name}</p>
            <p>Balance: {this.props.user.balance}</p>
            <p>Assets: {this.props.numAssets}</p>
        </div>
     
    )
  }

}

//PropTypes
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  numAssets: PropTypes.number.isRequired,
}

export default Profile