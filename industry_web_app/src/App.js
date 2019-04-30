import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import './App.css';
import Client from './Client'
import Homepage from './components/pages/Homepage'
import InsureAsset from './components/pages/InsureAsset'
import ViewInsuredAssets from './components/pages/ViewInsuredAssets'
import Claims from './components/pages/Claims'
import ProcessClaim from './components/pages/ProcessClaim'

class App extends Component {

  state = {
    name: "laya",
    privates: [],
    assets: [],
    openAssets: [],
    insuredAssets: [],
    login: true,
    selectedAsset: {},
    claims: [],
    selectedClaim: {},
  }

  componentWillMount = () => {
    this.getPrivateIndividual()
    // this.getAssets()
    this.getAssetsOpenToInsurance();
    this.getInsuredAssets();
    this.getClaims();
  }

  getPrivateIndividual = () => {
    Client.search('PrivateIndividual')
      .then(data => {
        this.setState({
          privates: data
        })
      })
  }

  getAssets = () => {
    Client.search('PrivateAsset')
      .then(data => {
        console.log(data)
        this.setState({
          assets: data
        })
        for (let i = 0; i < this.state.assets.length; i++) {
          let privateIndividual = this.state.assets[i].privateIndividual.split('#')[1]
          Client.search(`PrivateIndividual/${privateIndividual}`)
            .then(data => {
              let assets = this.state.assets
              assets[i].ownerName = data.name
              this.setState({
                assets
              })
            })
        }
      })
  }

  makeInsuranceOffer = (privateIndividual, privateAssetID) => {
    const data = {
      "$class": "org.acme.insuranceregistry.MakeInsuranceOffer",
      "privateIndividual": privateIndividual,
      "insuranceCompany": "org.acme.insuranceregistry.InsuranceCompany#" + this.state.name,
      "privateAsset": "org.acme.insuranceregistry.PrivateAsset#" + privateAssetID
    }
    console.log(data)
    Client.create('MakeInsuranceOffer', data);
  }

  processClaim = async (status, claimID) => {
    const data = {
      "$class": "org.acme.insuranceregistry.ProcessClaim",
      "processClaim": "org.acme.insuranceregistry.Claim#" + claimID,
      "status": status
    }

    Client.create('ProcessClaim', data)

  }

  getAssetsOpenToInsurance = () => {
    Client.search('queries/selectAssetsOpenToInsurance')
      .then(data => {
        console.log(data)
        this.setState({
          openAssets: data
        })
        for (let i = 0; i < this.state.openAssets.length; i++) {
          let privateIndividual = this.state.openAssets[i].privateIndividual.split('#')[1]
          console.log(privateIndividual)
          Client.search(`PrivateIndividual/${privateIndividual}`)
            .then(data => {
              console.log(data)
              let openAssets = this.state.openAssets
              openAssets[i].ownerName = data.name
              this.setState({
                openAssets
              })
            })
        }
      })
  }

  getInsuredAssets = () => {
    Client.search(`queries/selectAcceptedInsuranceOffersBy?insuranceCompany=resource%3Aorg.acme.insuranceregistry.InsuranceCompany%23${this.state.name}`)
      .then(data => {
        this.setState({
          insuredAssets: data
        })
        for (let i = 0; i < this.state.insuredAssets.length; i++) {
          let privateIndividual = this.state.insuredAssets[i].privateIndividual.split('#')[1];
          Client.search(`PrivateIndividual/${privateIndividual}`)
            .then(data => {
              console.log(data);
              let insuredAssets = this.state.insuredAssets;
              insuredAssets[i].ownerName = data.name;
              this.setState({
                insuredAssets
              })
            })
        }

        for (let i = 0; i < this.state.insuredAssets.length; i++) {
          let privateAsset = this.state.insuredAssets[i].privateAsset.split('#')[1];
          Client.search(`PrivateAsset/${privateAsset}`)
            .then(data => {
              console.log(data);
              let insuredAssets = this.state.insuredAssets;
              insuredAssets[i].assetType = data.description;
              insuredAssets[i].totalValue = data.value;
              this.setState({
                insuredAssets
              })
            })
        }
      })

  }

  getClaims = () => {
    Client.search(`queries/selectClaimsByInsuranceCompany?insuranceCompany=resource%3Aorg.acme.insuranceregistry.InsuranceCompany%23${this.state.name}`)
      .then(data => {
        this.setState({
          claims: data
        })
        for (let i = 0; i < this.state.claims.length; i++) {
          let privateIndividual = this.state.claims[i].privateIndividual.split('#')[1];
          Client.search(`PrivateIndividual/${privateIndividual}`)
            .then(data => {
              console.log(data);
              let claims = this.state.claims;
              claims[i].ownerName = data.name;
              this.setState({
                claims
              })
            })
        }

        for (let i = 0; i < this.state.claims.length; i++) {
          let privateAsset = this.state.claims[i].privateAsset.split('#')[1];
          Client.search(`PrivateAsset/${privateAsset}`)
            .then(data => {
              console.log(data);
              let claims = this.state.claims;
              claims[i].assetType = data.description;
              claims[i].totalValue = data.value;
              this.setState({
                claims
              })
            })
        }
      })

  }

  handlePrivateInputChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  logout = async () => {
    this.setState({ login: false })
  }

  handleAssetInputChange = e => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  selectedAsset = async (assetID) => {
    for (let i = 0; i < this.state.openAssets.length; i++) {
      console.log(this.state.openAssets[i].id)
      if (this.state.openAssets[i].id === assetID) {
        await this.setState({ selectedAsset: this.state.openAssets[i] })
        console.log(this.state.selectedAsset)
        break;
      }
    }

  }

  selectedClaim = async (claimID) => {
    for (let i = 0; i < this.state.claims.length; i++) {
      console.log(this.state.claims[i].id)
      if (this.state.claims[i].id === claimID) {
        await this.setState({ selectedClaim: this.state.claims[i] })
        console.log(this.state.selectedClaim)
        break;
      }
    }

  }

  render() {
    var openAssetsEmpty;
    if (this.state.openAssets.length === 0) {
      openAssetsEmpty = <h1>No Assets Currently Open To Insurance</h1>
    } else {
      openAssetsEmpty = <h1>Assets open to insurance</h1>
    }
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header logout={this.logout} />
            <Route exact path={"/"} render={props => (
              <React.Fragment>
                {openAssetsEmpty}
                <Homepage openAssets={this.state.openAssets} selectedAsset={this.selectedAsset} />
              </React.Fragment>
            )} />
            <Route path={"/viewasset"} render={props => (
              <React.Fragment>
                <InsureAsset selectedAsset={this.state.selectedAsset} makeOffer={this.makeInsuranceOffer} />
              </React.Fragment>
            )} />
            <Route path={"/insuredassets"} render={props => (
              <React.Fragment>
                <ViewInsuredAssets insuredAssets={this.state.insuredAssets} />
              </React.Fragment>
            )} />
            <Route path={"/claims"} render={props => (
              <React.Fragment>
                <Claims Claims={this.state.claims} selectedClaim = {this.selectedClaim} />
              </React.Fragment>
            )} />
            <Route path={"/processclaim"} render={props => (
              <React.Fragment>
                <ProcessClaim Claim={this.state.selectedClaim} ProcessClaim = {this.processClaim} />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;