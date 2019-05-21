import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ViewAsset extends Component {

    render() {
        let assetStyle = {
            divNotHover: {
              display: 'inline-block',
              background: '#333',
              width: '500px',
              height: '200px',
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
            <div style = { assetStyle.divNotHover }>
                <p>Asset Type: {this.props.selectedAsset.description}</p>
                <p>Asset Value: {this.props.selectedAsset.value}</p>
                <p>Asset ID: {this.props.selectedAsset.id}</p>
                <p>Insurance Length: {this.props.selectedAsset.durationInMonths}</p>
                <p>Risk Analysis Score: {this.props.selectedAsset.riskAnalysisScore}</p>
            </div>
        );
    }

}

//PropTypes
ViewAsset.propTypes = {
    selectedAsset: PropTypes.object.isRequired,
}

export default ViewAsset
