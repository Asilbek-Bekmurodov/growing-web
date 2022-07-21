import React, { Component } from "react";
import styled from "styled-components";
import Products from "./products-card";

import Button from "./button";


export default class Product extends Component {
  render() {
    return (
      <Wrapper>
        <h2 className="product-title">Our Best Product</h2>
        <p className="product-subtitle">New Plants New Arrivals Sale</p>
        <div className="cards-wrapper">
          <Products/>
        </div>

        <Button contentText = "Veiw All" />
      </Wrapper>
    );
  }
}

// -----------Style--------------

const Wrapper = styled.div`
  padding: 12.8rem 14.4rem;
  text-align: center;

  .product-title {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;

    color: #1a1a1a;
  }

  .product-subtitle {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    color: #4a4a4a;
    margin: 2.4rem 0 4.8rem;
  }

  .cards-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.4rem;
    margin-bottom: 4rem;
  }
`;
