import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddAsset from './AddAsset';
// import Select from 'react-select'


class NewClaimForm extends Component {

    list_items = []
    createSelectItems() {
        let items = [];
        items.push(<option key="default" value="">Select asset type</option>)
        for (let i = 0; i < this.props.userassets.length; i++) {
            items.push(<option key={i} value={this.props.userassets[i].id}>{this.props.userassets[i].description}</option>);

            //here I will be creating my options dynamically based on
            //what props are currently passed to the parent component
        }
        return items;
    }

    render() {

        return (
            <form onSubmit={this.props.onSubmit} style={{ display: 'block', background: '#5B5B5B' }}>
                <div>
                    <select
                        type={"text"}
                        name={"asset"}
                        style={titleStyle}
                        placeholder={"Select an insured asset"}
                        value={this.props.asset}
                        onChange={this.props.onChange}>
                        {this.createSelectItems()}
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
                        name={"description"}
                        style={titleStyle}
                        placeholder={"Please describe what you are claiming for"}
                        value={this.props.description}
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
