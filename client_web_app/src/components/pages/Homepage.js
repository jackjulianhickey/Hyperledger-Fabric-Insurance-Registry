import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {HomepageItems} from "./HomepageItems";

class Homepage extends Component {
  render() {
    return this.props.assets.map((asset) => (
      <HomepageItems key = {asset.id} asset = {asset}/>
    ));

  }
}

//PropTypes
Homepage.propTypes = {
  assets: PropTypes.array.isRequired
}

export default Homepage
