import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { HomepageItems } from "./HomepageItems";
import Profile from "./Profile";
import AddAsset from "./AddAsset"
import NewClaim from "./NewClaim"

class Homepage extends Component {

  render() {
    let itemsStyle = {
      position: 'relative',
      top: '10px',
      width: '58%',
      borderRight: '1px solid black',
    }

    let profileStyle = {
      position: 'absolute',
      top: '100px',
      left: '59%',
      width: '30%',
      borderBottom: '1px solid black',
    }

    let newAssetStyle = {
      position: 'absolute',
      top: '290px',
      width: '30%',
      height: '34%',
      borderBottom: '1px solid black',
      left: '59%'
    }

    let newClaimStyle = {
      position: 'absolute',
      top: '610px',
      width: '30%',
      height: '34%',
      borderBottom: '1px solid black',
      left: '59%'
    }

    return (
      <div>
        <div style={profileStyle}>
          <Profile user={this.props.user} numAssets={this.props.numAssets} />
        </div>
        <div style={itemsStyle}>
          {this.props.assets.map((asset) => (
            <HomepageItems key={asset.id} asset={asset} selectedAsset = {this.props.selectedAsset}/>
          ))}
        </div>
        <div style={newAssetStyle}>
          <AddAsset addAsset={this.props.addAsset} />
        </div>
        <div style={newClaimStyle}>
        <NewClaim newClaim={this.props.newClaim} assets = { this.props.insuredAssets } />
      </div>
      </div>);

  }
}

//PropTypes
Homepage.propTypes = {
  assets: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  numAssets: PropTypes.number.isRequired,
  addAsset: PropTypes.func.isRequired,
  newClaim: PropTypes.func.isRequired,
  insuredAssets: PropTypes.array.isRequired,
  selectedAsset: PropTypes.func.isRequired
}

export default Homepage
