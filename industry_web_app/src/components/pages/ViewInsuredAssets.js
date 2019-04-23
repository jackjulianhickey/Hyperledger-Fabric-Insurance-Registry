import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ViewInsuredAssetsItems from './ViewInsuredAssetsItems'


class ViewInsuredAssets extends Component {
  render() {
    return this.props.insuredAssets.map((asset) => (
      <ViewInsuredAssetsItems key = {asset.id} asset = {asset}/>
    ));

  }
}

//PropTypes
ViewInsuredAssets.propTypes = {
  insuredAssets: PropTypes.array.isRequired,
//   selectedAsset: PropTypes.func.isRequired
}

export default ViewInsuredAssets
