import React, { Component } from 'react';
import NewClaimForm from './NewClaimForm'
import PropTypes from 'prop-types';


class NewClaim extends Component {
    state = {
        description: '',
        value: '',
        asset: '',
        insuredItems: [],
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.newClaim(this.state.asset, this.state.description, this.state.value);
        this.setState({ description: '', value: '', asset: '' });
    }

    onChange = (e) => {

        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <div >
                <h1>New Claim</h1>
                <NewClaimForm onSubmit={this.onSubmit} onChange={this.onChange}
                    description={this.state.description} value={this.state.value} asset={this.state.asset} userassets={this.props.assets} />
            </div>
        );
    }

}

const blogStyle = {
    textAlign: 'left',
    marginTop: '10px',
    padding: '10px',
    width: '50%',
    height: '500px'
}

const titleStyle = {
    textAlign: 'left',
    marginTop: '10px',
    padding: '10px',
    width: '50%'
}
//PropTypes
NewClaim.propTypes = {
    newClaim: PropTypes.func.isRequired,
    assets: PropTypes.array.isRequired
}

export default NewClaim
