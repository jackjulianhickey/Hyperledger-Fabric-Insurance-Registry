import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProcessClaim extends Component {

    handleButton = (status) => {
        this.props.ProcessClaim(status.target.value, this.props.Claim.id)

    }


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
                <p>Asset Type: {this.props.Claim.assetType}</p>
                <p>Asset Value: {this.props.Claim.totalValue}</p>
                <p>Claim Value: {this.props.Claim.claimValue}</p>
                <p>Claim Description: {this.props.Claim.description}</p>
                <button style = { assetStyle.button} onClick={this.handleButton} value="accepted">Accept</button>
                <button style = { assetStyle.button} onClick={this.handleButton} value="denied">Reject</button>
            </div>
        );
    }

}

const blogStyle = {
    marginTop: '10px',
    marginLeft: '10px',
    width: '50%',
    overflowY: 'auto'

}

const titleStyle = {
    textAlign: 'left',
    marginTop: '10px',
    marginLeft: '10px',
    padding: '10px',
    width: '50%'
}
//PropTypes
ProcessClaim.propTypes = {
    Claim: PropTypes.object.isRequired,
    ProcessClaim: PropTypes.func.isRequired
}

export default ProcessClaim
