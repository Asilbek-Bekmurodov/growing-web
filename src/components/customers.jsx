import React, { Component } from "react";

import customerBg from "../assets/images/customer-photo.jpg";
import customerImg from "../assets/images/profile-photo.png";
import quota from "../assets/images/quota.svg";
import styled from "styled-components";

export default class Customers extends Component {
  render() {
    return (
      <Wrapper>
        <div className="info-section">
          <h2 className="info-title">What Our Customers Says</h2>
          <p className="info-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at.
          </p>
          <div className="mail">
            <div className="profile">
                <img className="quota" src={quota} alt="" />
              <img src={customerImg} alt="" />
              <div className="profile-info">
                <p className="profile-name">Hasanul Islam</p>
                <b className="profile-job">Marketing CEO</b>
              </div>
            </div>
            <p className="mail-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>
          </div>
        </div>
        <div className="img-section">
          <img src={customerBg} alt="" />
        </div>
      </Wrapper>
    );
  }
}

// -----------Style--------------

const Wrapper = styled.div`
  padding: 0 14.4rem;
  display: flex;
  align-items: center;

  .info-title {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;

    color: #1a1a1a;
  }

  .info-paragraph {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: #4a4a4a;
    margin: 1.2rem 0 4.3rem;
  }

  .mail {
    background: #066f14;
    padding: 1.6rem 2.4rem 3rem 3rem;
    position: relative;

    .quota{
        position: absolute;
        right: 2rem;
        top: 2rem;
    }

    .profile {
      display: flex;
      align-items: center;
      gap: 2rem;

      .profile-name {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;

        color: #ffffff;
      }

      .profile-job {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        color: #d9d9d9;
      }
    }
    .mail-text {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;

      color: #ececec;
      margin-top: 1.6rem;
    }

    .img-section{
        img{
            z-index: -2;
        }
    }
  }
`;
