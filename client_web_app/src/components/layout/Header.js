import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1 style={titleStyle}>Blockchain Verfied Insurance</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/viewoffers">View Offers</Link>
      </header>
    )
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'right',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'

}

const titleStyle = {
  textAlign: 'left'
}

Header.propTypes = {
  logout: PropTypes.func.isRequired
}

export default Header;
