import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {HomepageItems} from "./HomepageItems";

class Homepage extends Component {

  getStyle = () => {
    return {
     width: '300px',
     overflow: 'hidden',
     display: 'flex'
    }
  }
  render() {
    return this.props.openAssets.map((asset) => (
      <HomepageItems key = {asset.id} asset = {asset} selectedAsset={this.props.selectedAsset}/>
    ));

  }
}

//PropTypes
Homepage.propTypes = {
  openAssets: PropTypes.array.isRequired,
  selectedAsset: PropTypes.func.isRequired
}

export default Homepage
