import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProcessClaim extends Component {

    handleButton = (status) => {
        this.props.ProcessClaim(status.target.value, this.props.Claim.id)

    }


    render() {
        console.log(this.props.Claim)
        return (
            <div>
                <p>Asset Type: {this.props.Claim.assetType}</p>
                <p>Asset Value: {this.props.Claim.totalValue}</p>
                <p>Claim Value: {this.props.Claim.claimValue}</p>
                <p>Claim Description: {this.props.Claim.description}</p>
                <button onClick={this.handleButton} value="accepted">Accept</button>
                <button onClick={this.handleButton} value="denied">Reject</button>
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
