import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { HomepageItems } from "./HomepageItems";
import Profile from "./Profile";

class Homepage extends Component {

  render() {
    let itemsStyle = {
      position: 'relative',
      top: '10px',
      paddingRight: '30%'
    }

    let profileStyle = {
      position: 'absolute',
      top: '200px',
      paddingLeft: '75%'
    }
    return (
      <div>
        <div style = { profileStyle }>
          <Profile user={this.props.user} />
        </div>
        <div style={itemsStyle}>
          {this.props.assets.map((asset) => (
            <HomepageItems key={asset.id} asset={asset} />
          ))}
        </div>   
      </div>);

  }
}

//PropTypes
Homepage.propTypes = {
  assets: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired
}

export default Homepage
