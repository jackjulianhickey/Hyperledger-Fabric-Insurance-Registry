import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class Profile extends Component {

  getStyle = () => {
    return {
      background: '#5B5B5B',
      padding: '15px',
      borderBottom: '1px #000000 solid',
      color: 'white'
    }

  }

  render() {
    return (
        <div>
            <p>Name: {this.props.user.name}</p>
            <p>Your Balance: {this.props.user.balance}</p>
        </div>
     
    )
  }

}

//PropTypes
Profile.propTypes = {
  user: PropTypes.object.isRequired
}

export default Profile