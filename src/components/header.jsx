import React, { Component } from "react";
import styled from "styled-components";
import Button from "./button";
import Navbar from "./navbar";
import Statuss from "./statuss";

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />

        <div className="header-container">
          <div className="text-container">
            <h1 className="header-title">Growing Beautiful Plants at Home</h1>
            <p className="header-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
              Learn More
            </p>
            <Button
              contentText="Learn More"
              color="white"
              padding="1.6rem 3.2rem"
            />
            <div className="status">
              <Statuss/>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 6rem 8.2rem;

  .status{
    display: flex;
    align-items: center;
    gap: 4rem;
    text-align: center;
  }
`;
