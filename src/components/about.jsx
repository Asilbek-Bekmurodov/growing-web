import React, { Component } from "react";
import styled from "styled-components";
import Button from "./button";
import aboutImg from "../assets/images/About.png";

export default class About extends Component {
  render() {
    return (
      <Wrapper>
        <div className="img-section">
          <img src={aboutImg} alt="" />
        </div>
        <div className="info-section">
          <p className="small-title">About us</p>
          <h2 className="title">
            Continue to Develop to Became Global Company
          </h2>
          <p className="info-paragraph">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan
            sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam.
            Lectus elit, nulla elementum fringilla at.
          </p>

          <h4 className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus.{" "}
          </h4>
          <Button contentText="Read More" padding = "1.6rem 3.2rem"/>
        </div>
      </Wrapper>
    );
  }
}

// -----------Style--------------

const Wrapper = styled.div`
  padding: 0 17rem;
  display: flex;
  align-items: center;
  gap: 8rem;

  .small-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    color: #066f14;
  }

  .title {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;

    color: #1a1a1a;
    margin: 1.2rem 0 2.4rem;
  }

  .info-paragraph {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: #4a4a4a;
  }

  .sub-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;

    color: #4a4a4a;

    margin: 1.6rem 0 3.6rem;
  }
`;
