import React, { Component } from 'react'


export default class Product extends Component {
  render() {
    const {bgColor, content} = this.props;
    return (
      <h1 style={{background: bgColor}}>{content}</h1>
    )
  }
}
