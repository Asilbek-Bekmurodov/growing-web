import React, { Component } from "react";
import styled from "styled-components";
import Button from "./button";
import Navbar from "./navbar";
import Statuss from "./statuss";

import bgImg from "../assets/images/mainBg.png";
import bgImg2 from "../assets/images/bark.png";

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
              <Statuss />
            </div>
          </div>
          <img src={bgImg} alt="" />
        </div>
        <img className="bg-2" src={bgImg2} alt="" />
      </Wrapper>
    );
  }
}

// ------------Style-------------

const Wrapper = styled.div`
  padding: 6rem 8.2rem;
  position: relative;

  .header-container {
    height: calc(100vh - 180px);
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 4rem;
    text-align: center;
    margin-top: 6rem;
  }

  .header-title {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 92px;

    color: #1a1a1a;
  }

  .header-paragraph {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: #4a4a4a;
    margin: 4rem 0 2.4rem;
  }

  .bg-2 {
    position: absolute;
    bottom: 20px;
    left: 40%;
  }
`;
