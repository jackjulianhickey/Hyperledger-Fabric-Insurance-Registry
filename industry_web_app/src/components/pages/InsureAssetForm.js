import React, { Component } from 'react';
import PropTypes from 'prop-types';


class InsureAssetForm extends Component{

  render() {
    return (
      <form onSubmit={this.props.onSubmit} style={{ display: 'block', background: '#5B5B5B' }}>
        <div>
          <input
            type={"text"}
            name={"privateIndividual"}
            style={titleStyle}
            placeholder={this.props.asset.privateIndividual}
            value={this.props.privateIndividual}
            onChange={this.props.onChange}/>
        </div>
        <div>
        <input
            type={"text"}
            name={"privateAsset"}
            style={titleStyle}
            placeholder={this.props.asset.id}
            value={this.props.privateAsset}
            onChange={this.props.onChange}/>
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{flex: '1', background: '#333', marginLeft: '50%'}}
          />
        </div>
      </form>
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
InsureAssetForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  privateIndividual: PropTypes.string.isRequired,
  privateAsset: PropTypes.string.isRequired,
  asset: PropTypes.object.isRequired
}

export default InsureAssetForm
