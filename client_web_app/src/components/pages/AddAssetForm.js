import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NewBlogForm extends Component{

  render() {
    return (
      <form onSubmit={this.props.onSubmit} style={{ display: 'block', background: '#5B5B5B' }}>
        <div>
          <input
            type={"text"}
            name={"description"}
            style={titleStyle}
            placeholder={"Enter description eg: car, house, bikes"}
            value={this.props.description}
            onChange={this.props.onChange}/>
        </div>
        <div>
        <input
            type={"text"}
            name={"value"}
            style={titleStyle}
            placeholder={"Enter value"}
            value={this.props.value}
            onChange={this.props.onChange}/>
        </div>
        <div>
        <input
            type={"text"}
            name={"durationInMonths"}
            style={titleStyle}
            placeholder={"Enter how long you want this asset insured for"}
            value={this.props.durationInMonths}
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
NewBlogForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  durationInMonths: PropTypes.string.isRequired
}

export default NewBlogForm
