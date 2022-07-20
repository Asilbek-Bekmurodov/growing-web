import React, { Component } from "react";
import Button from "./button";

export default class Btns extends Component {
  render() {
    const buttonsData = [
      {
        bgColor: "#fff",
        contentText: "Login",
        padding: "1.2rem 1.6rem",
        contextColor: "#1A1A1A",
      },
      {
        bgColor: "#066F14",
        contentText: "Sing Up",
        padding: "1.2rem 1.6rem",
        contextColor: "#fff",
      }
    ];
    return <>
      {buttonsData.map(item =>(
        <Button bgColor ={item.bgColor} contentText = {item.contentText} padding= {item.padding} contextColor = {item.contextColor}/>
      ))}
    </>
  }
}
