import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NewClaimForm extends Component {



    render() {
        return (
            <form onSubmit={this.props.onSubmit} style={{ display: 'block', background: '#5B5B5B' }}>
                <div>
                    <select
                        type={"select"}
                        name={"asset"}
                        style={titleStyle}
                        placeholder={"Select Asset"}
                        value={this.props.asset}
                        onChange={this.props.onChange}>
                        {this.props.userassets.map(asset => (
                            <option key={asset.id} value={asset.id}>
                                {asset.description}
                            </option>
                        ))}
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
                        style={{ flex: '1', background: '#333', marginLeft: '50%' }}
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
NewClaimForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    asset: PropTypes.string.isRequired,
    userassets: PropTypes.array.isRequired
}

export default NewClaimForm
