import React, { Component } from 'react';
import AddAssetForm from './AddAssetForm'
import PropTypes from 'prop-types';


class AddAsset extends Component {
  state = {
    description: '',
    value: '',
    durationInMonths: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addAsset(this.state.description, this.state.value, this.state.durationInMonths);
    this.setState({ description: '', value: '', durationInMonths: '' });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    return (
      <div>
      <h1>Add New Asset</h1>
        <AddAssetForm onSubmit={this.onSubmit} onChange={this.onChange} description={this.state.description} value={this.state.value} durationInMonths={this.state.durationInMonths} />
      </div>
    );
  }

}

const blogStyle = {
  textAlign: 'left',
  marginTop: '10px',
  padding: '10px',
  width: '30%',
  height: '500px'
}

const titleStyle = {
  textAlign: 'left',
  marginTop: '10px',
  padding: '10px',
  width: '50%'
}
//PropTypes
AddAsset.propTypes = {
  addAsset: PropTypes.func.isRequired
}

export default AddAsset
