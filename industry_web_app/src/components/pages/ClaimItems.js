import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProcessClaim from './ProcessClaim'

export class ClaimItems extends Component {

  // getStyle = () => {
  //   return {
  //     background: '#5B5B5B',
  //     padding: '15px',
  //     borderBottom: '1px #000000 solid',
  //     color: 'white',
  //     display: 'inline-block'
  //   }

  // }

  setClaim = () => {
    this.props.selectedClaim(this.props.claim.id)
  }

  render() {
    let assetStyle = {
      divNotHover: {
        display: 'inline-block',
        background: '#333',
        width: '400px',
        height: '140px',
        textAlign: 'left',
        padding: '20px',
        margin: '20px',
        border: '5px solid #333',
        color: 'white'
      },
      button: {
        padding: '3px',
        margin: '3px',
        cursor: 'pointer',
        fontSize: '16px'
      }

    }
    return (
      <div style={assetStyle.divNotHover} >
        <p>Description: {this.props.claim.description}</p>
        <p>Value: {this.props.claim.claimValue}</p>
        <button><Link to={"/processclaim"} onClick={this.setClaim} style = {assetStyle.button}>
          View Claim
          </Link>
        </button>
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
      //     <p>Description: {this.props.claim.description}</p>
      //     <p>Value: {this.props.claim.claimValue}</p>
      //   </FrontSide>
      //   <BackSide
      //     style={{
      //       color: 'white',
      //       backgroundColor: '#333'
      //     }}
      //   >
      //     <button><Link to={"/processclaim"} onClick={this.setClaim}>
      //       View Claim
      //     </Link>
      //     </button>
      //   </BackSide>
      // </Flippy>
    );
  }

}

//PropTypes
ClaimItems.propTypes = {
  claim: PropTypes.object.isRequired,
  selectedClaim: PropTypes.func.isRequired
}

