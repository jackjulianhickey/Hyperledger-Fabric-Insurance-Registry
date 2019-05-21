import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export class HomepageItems extends Component {

  // getStyle = () => {
  //   return {
  //     background: '#5B5B5B',
  //     padding: '15px',
  //     borderBottom: '1px #000000 solid',
  //     color: 'white',
  //     display: 'inline-block'
  //   }

  // }

  setAsset = () => {
    this.props.selectedAsset(this.props.asset.id)
  }

  render() {
    let assetStyle = {
      divNotHover: {
        display: 'inline-block',
        background: '#333',
        width: '400px',
        height: '200px',
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
        fontSize: '16px'
      }

    }
    return (
      <div style={assetStyle.divNotHover} >
        <p>Description: {this.props.asset.description}</p>
        <p>Value: {this.props.asset.value}</p>
        <p>Length in Months Required: {this.props.asset.durationInMonths}</p>
        <p>Risk Analysis Score: {this.props.asset.riskAnalysisScore}</p>
        <button><Link to={"/viewasset"} onClick={this.setAsset} style={assetStyle.button}>
          View Asset
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
      //   style={{ width: '400px', height: '180px', padding: '15px', display: 'inline-block'}} /// these are optional style, it is not necessary
      // >
      //   <FrontSide
      //     style={{
      //       color: 'white',
      //       backgroundColor: '#333',
      //     }}
      //   >
      //     <p>Description: {this.props.asset.description}</p>
      //     <p>Value: {this.props.asset.value}</p>
      //   </FrontSide>
      //   <BackSide
      //     style={{
      //       color: 'white',
      //       backgroundColor: '#333'
      //     }}
      //   >
      //     <p>Length in Months Required: {this.props.asset.durationInMonths}</p>
      //     <p>Risk Analysis Score: {this.props.asset.riskAnalysisScore}</p>
      //     <button><Link to={"/viewasset"} onClick={this.setAsset}>
      //       View Asset
      //     </Link>
      //     </button>
      //   </BackSide>
      // </Flippy>
    );
  }

}

//PropTypes
HomepageItems.propTypes = {
  asset: PropTypes.object.isRequired,
  selectedAsset: PropTypes.func.isRequired
}

