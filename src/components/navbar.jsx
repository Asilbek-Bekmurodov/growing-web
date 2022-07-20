import React, { Component } from "react";
import styled from "styled-components";
import Btns from "./btns";

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <b className="brand">Plant</b>

        <ul>
          <li>
            <a href="#1">Home</a>
          </li>
          <li>
            <a href="#2">Services</a>
          </li>
          <li>
            <a href="#3">About Us</a>
          </li>
          <li>
            <a href="#4">Blog</a>
          </li>
          <li>
            <a href="#5">Contact</a>
          </li>
        </ul>

        <div className="btn-wrapper">
          <Btns />
        </div>
        
      </Nav>
    );
  }
}

// ---------------  style  ---------------------

const Nav = styled.nav`
  display: flex;
  align-items: center;

  .brand {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;

    color: #1a1a1a;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4.8rem;
    margin-left: auto;

    li {
      a {
        text-decoration: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        color: #1a1a1a;
      }
    }
  }

  .btn-wrapper {
    margin-left: 128px;
    display: flex;
    align-items: center;
    gap: 4.8rem;
  }
`;
