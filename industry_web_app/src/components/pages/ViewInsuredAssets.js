import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ViewInsuredAssetsItems from './ViewInsuredAssetsItems'


class ViewInsuredAssets extends Component {
  render() {
    return (
      <div>
      <h1>Insured Assets</h1>
        <div>
          {this.props.insuredAssets.map((asset) => (
            <ViewInsuredAssetsItems key={asset.id} asset={asset} />
          ))}
        </div>
      </div>)

  }
}

//PropTypes
ViewInsuredAssets.propTypes = {
  insuredAssets: PropTypes.array.isRequired,
  //   selectedAsset: PropTypes.func.isRequired
}

export default ViewInsuredAssets
