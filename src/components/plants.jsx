import React, { Component } from "react";
import plant1 from "../assets/images/plant1.png"
import plant2 from "../assets/images/plant 2.png"
import plant3 from "../assets/images/plant3.png"


import styled from "styled-components";



export default class Plants extends Component {
  render() {
    return (
      <Wrapper>
        <div className="info">
          <h2 className="plant-title">
            We have lots of plants collection for you and your family
          </h2>
          <a className="link-to" href="#1">
            See all collection <img src="" alt="" />
          </a>
        </div>
        <div className="imgs">
            <img src= {plant1} alt="" />
            <img src= {plant2} alt="" />
            <img src= {plant3} alt="" />
        </div>
      </Wrapper>
    );
  }
}

// -----------Style--------------

const Wrapper = styled.div`
  padding: 5.9rem 14.4rem 12.8rem;
  display: flex;
  align-items: center;

  .plant-title {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;

    color: #1a1a1a;
    margin-bottom: 3.7rem;
  }
  .link-to {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    color: #4a4a4a;
    text-decoration: none;
  }

  .imgs{
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
`;
