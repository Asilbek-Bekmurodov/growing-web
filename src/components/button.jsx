import React, { Component } from "react";
import styled from "styled-components";

export default class Button extends Component {
  render() {
    const { bgColor, contentText, contextColor, padding } = this.props;
    return (
      <Btn
        style={{ background: bgColor, color: contextColor, padding: padding }}
      >
        {contentText}
      </Btn>
    );
  }
}

const Btn = styled.button`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #ffffff;

  background: #066f14;
  border-radius: 4px;
  border: none;
  padding: 1.2rem 1.6rem;
`;
