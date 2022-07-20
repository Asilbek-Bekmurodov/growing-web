import React, { Component } from "react";
import styled from "styled-components";

export default class Status extends Component {
  render() {
    const { counter, title } = this.props;
    return (
      <Wrapper>
        <h3>{counter}</h3>
        <p>{title}</p>
      </Wrapper>
    );
  }
}
// ------------style-------------
const Wrapper = styled.div`
  h3 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;

    color: #001b04;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    color: #1a1a1a;
  }
`;
