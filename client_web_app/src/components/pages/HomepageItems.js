import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export class HomepageItems extends Component {

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

    let assetStyle = {
      divNotHover: {
        display: 'inline-block',
        background: '#333',
        width: '350px',
        height: '160px',
        textAlign: 'left',
        padding: '20px',
        margin: '20px',
        border: '5px solid #333',
        color: 'white'
      },
      divHover: {
        display: 'inline-block',
        background: '#333',
        width: '350px',
        height: '130px',
        textAlign: 'left',
        padding: '20px',
        margin: '20px',
        border: '5px solid #333',
        color: 'white',
        boxShadow: ' 5px 10px black'
      },
      button: {
        padding: '3px',
        margin: '3px',
        cursor: 'pointer',
        fontSize: '16px',
      }

    }
    var insured;
    var numOffers;
    if (this.props.asset.status === 'insured') {
      insured = <button style = { assetStyle.button }>
        <Link to={"/viewasset"} onClick={this.setAsset}>
          View Asset
          </Link>
      </button>
      numOffers = <p>Insured</p>
    } else {
      insured = <div><button style = { assetStyle.button } >
        <Link to={"/viewasset"} onClick={this.setAsset}>
          View Asset
        </Link>
      </button>
        <button style = { assetStyle.button } >
          <Link to={"/viewoffers"} onClick={this.setAsset}>
            View Offers
      </Link>
        </button>
      </div>
      if (this.props.asset.numOffers == null) {
        numOffers = <p>Insurance Offers: 0</p>
      } else {
        numOffers = <p>Insurance Offers: {this.props.asset.numOffers}</p>
      }
    }
    return (
      <div style= {assetStyle.divNotHover} >
        <p>Description: {this.props.asset.description}</p>
        <p> Value: {this.props.asset.value}</p>
        {numOffers}
        {insured}
      </div>
      // <Flippy
      //   flipOnHover={true} // default false
      //   flipOnClick={false} // default false
      //   flipDirection="vertical" // horizontal or vertical
      //   ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
      //   // if you pass isFlipped prop component will be controlled component.
      //   // and other props, which will go to div
      //   style={{ width: '400px', height: '180px', padding: '15px', display: 'inline-block' }} /// these are optional style, it is not necessary
      // >
      //   <FrontSide
      //     style={{
      //       color: 'white',
      //       backgroundColor: '#333',
      //     }}
      //   >
      //     <p>Description: {this.props.asset.description}</p>
      //     <p> Value: {this.props.asset.value}</p>
      //     {numOffers}
      //   </FrontSide>
      //   <BackSide
      //     style={{
      //       color: 'white',
      //       backgroundColor: '#333'
      //     }}
      //   >
      //     {insured}
      //   </BackSide>
      // </Flippy>

    )
  }

}

//PropTypes
HomepageItems.propTypes = {
  asset: PropTypes.object.isRequired,
  selectedAsset: PropTypes.func.isRequired
}

