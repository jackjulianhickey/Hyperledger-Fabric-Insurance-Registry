import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class ViewInsuredAssetsItems extends Component {

  getStyle = () => {
    return {
      background: '#5B5B5B',
      padding: '15px',
      borderBottom: '1px #000000 solid',
      color: 'white'
    }

  }

  setAsset = () => {
    this.props.selectedAsset(this.props.asset.id)
  }

  render() {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="vertical" // horizontal or vertical
        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: '400px', height: '150px', padding: '15px',  display: 'inline-block' }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            color: 'white',
            backgroundColor: '#333',
          }}
        >
          <p>Description: {this.props.asset.assetType}</p>
          <p>Value: {this.props.asset.totalValue}</p>
          <p>Monthly Insurance Cost: {this.props.asset.monthlyCost}</p>
        </FrontSide>
        <BackSide
          style={{
            color: 'white',
            backgroundColor: '#333'
          }}
        >
          <p>Hello</p>
        </BackSide>
      </Flippy>
    );
  }

}

//PropTypes
ViewInsuredAssetsItems.propTypes = {
  asset: PropTypes.object.isRequired
}

export default ViewInsuredAssetsItems

