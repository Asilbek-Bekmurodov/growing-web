import React, { Component } from 'react'
import Product from './product'

export default class Products extends Component {
  render() {
    const productData = [{
        inner: "Outdoor Plant",
        color: "red",
        job: " Plant"
    },
    {
        inner: "Avaz",
        color: "yellow",
        job: " Plant"
    },
    {
        inner: "Asilbek",
        color: "green",
        job: " Plant"
    },
    {
        inner: "Habibulloh",
        color: "aqua",
        job: " Plant"
    }]
    return (
      <>
        {productData.map(item =>(
            <Product content = {item.inner} bgColor = {item.color}/> 
        ))}
      </>
    )
  }
}
