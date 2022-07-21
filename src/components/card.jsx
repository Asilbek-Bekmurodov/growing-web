import React, { Component } from "react";
import stars from "../assets/images/stars.png";
import styled from "styled-components";
import card1 from "../assets/images/card1.png";

export default class Card extends Component {
  render() {
    const { cardName, bgColor, cardImg } = this.props;
    return (
      <Wrapper style={{ background: bgColor }}>
        <img src={card1} alt="" />
        <h4 className="card-name">{cardName}</h4>
        <img src={stars} alt="" />
        <p className="price">$50.00</p>
      </Wrapper>
    );
  }
}

// ------------Style--------------

const Wrapper = styled.div`
  background: #eaf2e5;
  width: 270px;
  height: 283px;
  padding: 2rem 3rem;

  .card-name {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;

    color: #1a1a1a;
    margin: 1.2rem 0 1rem;
  }


`;
