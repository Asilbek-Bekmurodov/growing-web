import React, { Component } from 'react'
import About from './components/about'
import Customers from './components/customers'
import Follow from './components/follow'
import Header from './components/header'
import Newsletter from './components/newsletter'
import Plants from './components/plants'
import Product from './components/product'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Plants/>
        <About/>
        <Product/>
        <Customers/>
        <Newsletter/>
        <Follow/>
      </div>
    )
  }
}

