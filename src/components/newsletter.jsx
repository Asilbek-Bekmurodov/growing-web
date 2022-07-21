import React, { Component } from "react";
import Button from "./button";
import newsImg from "../assets/images/newsletter.png";

import styled from "styled-components";
export default class Newsletter extends Component {
  render() {
    return (
      <Wrapped>
        <div className="news-container">
          <h2 className="news-title">Subscribe Our Newsletter</h2>

          <p className="news-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at
            tempor, accumsan sit amet nunc cursus.
          </p>

          <div className="input-container">
            <input type="text" placeholder="Enter mail..." />
            <Button contentText="Subscribe" padding="1.1rem 1.6rem" />
          </div>

          <img className="new-bg" src={newsImg} alt="" />
          <h3>Customers</h3>
        </div>
      </Wrapped>
    );
  }
}
// ------------Style-------------
const Wrapped = styled.div`
  padding: 16.4rem 20rem 7.9rem;

  .news-container {
    padding: 6rem 0 6rem 5.6rem;
    position: relative;
    background: #dfffe3;
    border-radius: 6px;

    .news-title {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;

      color: #1a1a1a;
    }
    .news-paragraph {
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      max-width: 458px;

      color: #4a4a4a;
      margin: 1.2rem 0 3rem;
    }

    .input-container {
      width: 451px;
      height: 56px;
      position: relative;

      input {
        width: 100%;
        height: 100%;
        outline: none;
        padding-left: 3rem;

        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        color: #5a5a5a;
      }

      button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 8px;
      }
    }

    .new-bg {
      position: absolute;
      bottom: 0;
      right: 2rem;
    }
    h3 {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;

      position: absolute;
      bottom: 6rem;
      right: 12rem;
    }
  }
`;
