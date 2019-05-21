import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddAssetForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.onSubmit} style={{ display: 'block', background: '#333', padding: '10px',  margin: '10px' }}>
        <div>
          <select
            type={"text"}
            name={"description"}
            style={titleStyle}
            placeholder={"Enter description eg: car, house, bikes"}
            value={this.props.description}
            onChange={this.props.onChange}>
            <option value="DEFAULT">Select asset type</option>
            <option value="House">House</option>
            <option value={"Car"}>Car</option>
            <option value={"Phone"}>Phone</option>
            <option value={"Travel"}>Travel</option>
          </select>
        </div>
        <div>
          <input
            type={"text"}
            name={"value"}
            style={titleStyle}
            placeholder={"Enter value"}
            value={this.props.value}
            onChange={this.props.onChange} />
        </div>
        <div>
          <input
            type={"text"}
            name={"durationInMonths"}
            style={titleStyle}
            placeholder={"Enter how long you want this asset insured for"}
            value={this.props.durationInMonths}
            onChange={this.props.onChange} />
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{
              flex: '1',
              background: 'white',
              color: 'black',
              borderRadius: '4px',
              padding: '3px',
              margin: '3px',
              cursor: 'pointer',
              fontSize: '16px',
              marginLeft: '80%'
            }}
          />
        </div>
      </form>
    );
  }

}

const blogStyle = {
  marginTop: '10px',
  marginLeft: '10px',
  width: '100%',
  overflowY: 'auto'

}

const titleStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  textAlign: 'left',
  marginTop: '10px',
  marginLeft: '10px',
  padding: '10px',
  width: '80%'
}
//PropTypes
AddAssetForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  durationInMonths: PropTypes.string.isRequired
}

export default AddAssetForm
