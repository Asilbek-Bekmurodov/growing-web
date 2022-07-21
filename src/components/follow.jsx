import React, { Component } from "react";
import follow1 from "../assets/images/foollow1.png"
import follow2 from "../assets/images/follow2.png"
import follow3 from "../assets/images/follow3.png"

import styled from "styled-components";



export default class Follow extends Component {
  render() {
    return (
      <Wrapper>
        <h2 className="follow-title">Follow Us on Instagram</h2>
        <p className="follow-pragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
          accu msan sit amet nunc cursus. Nec tristique at in erat lectus
        </p>

        <div className="img-container">
            <img src={follow1} alt="" />
            <img src={follow2} alt="" />
            <img src={follow3} alt="" />
            <img src={follow2} alt="" />
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 0 14.4rem 12.8rem;
  text-align: center;

  .follow-title {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 57px;

    color: #1a1a1a;
  }

  .follow-pragraph {
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    margin: 1.2rem 0 4rem;

    color: #4a4a4a;
  }
`;
