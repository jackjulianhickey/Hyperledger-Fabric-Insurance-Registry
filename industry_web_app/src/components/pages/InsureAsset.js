import React, { Component } from 'react'
import PropTypes from 'prop-types';
import InsureAssetForm from './InsureAssetForm'

class InsureAssets extends Component {
    state = {
        privateAsset: '',
        privateIndividual: ''
      }
    
      onSubmit = (e) => {
        e.preventDefault();
        this.props.makeOffer(this.props.selectedAsset.privateIndividual, this.props.selectedAsset.id);
        this.setState({ description: '', value: '' , durationInMonths: ''});
      }
    
      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    dataStyle = () => {
        return {
          background: '#5B5B5B',
          position: 'absolute',
          height: '90%',
          padding: '10px',
          bottom: '10px',
          right: '10px',
          fontSize: '30px',
          top: '90px',
          overflowY: 'auto',
          color: 'white'
        }
    
      }
    
      render() {
        return (
          <div style={this.dataStyle()}><p>Asset Description: {this.props.selectedAsset.description}</p>
          <p>Asset Value: {this.props.selectedAsset.value}</p>
          <p>Risk Associated: {this.props.selectedAsset.riskAnalysisScore}</p>
          <p>Length of Requested Insurance: {this.props.selectedAsset.durationInMonths} </p>
          
          <InsureAssetForm onSubmit={this.onSubmit} onChange={this.onChange} privateIndividual={this.state.privateIndividual} privateAsset={this.state.privateAsset} asset={this.props.selectedAsset}/>
          </div>
        );
    
      }
    }
    
    // const viewBlogStyle = {
    //   display: 'block',
    //   position: 'absolute',
    //   height: 'auto',
    //   bottom: '0',
    //   top: '0px',
    //   left: '10px',
    //   right: '0',
    //   marginTop: '100px',
    //   marginBottom: '20px',
    //   background: '#5B5B5B',
    //   padding: '100px',
    //   borderBottom: '1px #000000 solid',
    //   color: 'white',
    //   textAlign: 'left',
    //   width: '50%'
    // }
    
    InsureAssets.propTypes = {
      selectedAsset: PropTypes.object.isRequired,
      makeOffer: PropTypes.func.isRequired
    }

export default InsureAssets
