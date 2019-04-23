import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import './App.css';
import Client from './Client'
import Homepage from './components/pages/Homepage'
import AddAsset from './components/pages/AddAsset'
import ViewOffers from './components/pages/ViewOffers'

class App extends Component {

  state = {
    name: "jack",
    privates: [],
    assets: [],
    openAssets: [],
    offers: [],
    login: true
  }

  componentWillMount = () => {
    this.getAssets()
  }

  getAssets = () => {
    Client.search('queries/selectAssetsByIndividual?privateIndividual=resource%3Aorg.acme.insuranceregistry.PrivateIndividual%23' + this.state.name)
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
              // assets[i].numOffers = null;
              this.setState({
                assets
              })
            })
        }
        this.getOffers()
      })
  }

  getOffers = () => {
    Client.search('queries/selectOpenOffersToIndividual?privateIndividual=resource%3Aorg.acme.insuranceregistry.PrivateIndividual%23' + this.state.name)
      .then(data => {
        this.setState({
          offers: data
        })
        for (let i = 0; i < this.state.offers.length; i++) {
          let privateIndividual = this.state.offers[i].privateIndividual.split('#')[1]
          let privateAsset = this.state.offers[i].privateAsset.split('#')[1]
          Client.search(`PrivateIndividual/${privateIndividual}`)
            .then(data => {
              let offers = this.state.offers
              offers[i].ownerName = data.name
              this.setState({
                offers
              })
            })
          Client.search(`PrivateAsset/${privateAsset}`)
            .then(data => {
              let offers = this.state.offers
              offers[i].asset = data.description
              this.setState({
                offers
              })

            })
        }
        this.setNumInsuranceOffers();
      })
  }

  setNumInsuranceOffers = () => {
    for ( let i = 0; i < this.state.offers.length; i++ ) {
      let privateAsset = this.state.offers[i].privateAsset.split('#')[1]
      for ( let x = 0; x < this.state.assets.length; x++ ) {
        let assets = this.state.assets
        if ( assets[x].id === privateAsset ) {
          if (assets[x].numOffers == null ) {
            assets[x].numOffers = 1
          } else {
            assets[x].numOffers += 1
          }
          this.setState({
            assets
          })
        }
      }
    }
  }

  acceptOffer = (offer) => {
    const data = {
      "$class": "org.acme.insuranceregistry.AcceptInsuranceOffer",
      "offer": "org.acme.insuranceregistry.InsuranceOffer#" + offer.id
    }
    Client.create('AcceptInsuranceOffer', data)
      .then(() => {
        console.log(offer.asset)
        const policyHolder = {
          "$class": "org.acme.insuranceregistry.RejectPendingOffers",
          "privateIndividual": "org.acme.insuranceregistry.PrivateIndividual#" + this.state.name,
          "privateAsset": "org.acme.insuranceregistry.PrivateAsset#jack" + offer.asset
        }
        Client.create('rejectPendingOffers', policyHolder)
      })
      .then(() => {
        let assets = this.state.assets
        assets = []
        this.setState({
          assets
        })
        let offers = this.state.offers
        this.setState({
          offers
        })
        this.getAssets()
      })
  }

  addAsset = (description, value, durationInMonths) => {
    const data = {
      "$class": "org.acme.insuranceregistry.CreateNewAsset",
      "privateIndividual": "org.acme.insuranceregistry.PrivateIndividual#" + this.state.name,
      "description": description,
      "value": Number(value),
      "durationInMonths": Number(durationInMonths)
    }

    Client.create('CreateNewAsset', data)
      .then(() => {
        this.getAssets()
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

  submitRealEstate = () => {
    const data = {
      "$class": "org.acme.landregistry.RealEstate",
      "id": this.state.id,
      "address": this.state.realEstateAddress,
      "squareMeters": this.state.squareMeters,
      "price": this.state.price,
      "owner": `org.acme.landregistry.PrivateIndividual#${this.state.owner}`
    }

    Client.create('RealEstate', data)
      .then(() => {
        this.getRealEstate()
      })
  }

  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header logout={this.logout} />
            <Route exact path={"/"} render={props => (
              <React.Fragment>
                <h1>My Assets</h1>
                <Homepage assets={this.state.assets} />
              </React.Fragment>
            )} />
            <Route path={"/addAsset"} render={props => (
              <React.Fragment>
                <AddAsset addAsset={this.addAsset} />
              </React.Fragment>
            )} />
            <Route path={"/viewoffers"} render={props => (
              <React.Fragment>
                <ViewOffers offers={this.state.offers} acceptOffer={this.acceptOffer} />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;