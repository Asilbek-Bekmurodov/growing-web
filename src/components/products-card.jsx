import React, { Component } from "react";
import Card from "./card";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";

export default class Products extends Component {
  render() {
    const cardsData = [
      {
        cardName: "Outdoor Plant",
        bgColor: "#F0EBE6",
        cardImg: card1,
      },
      {
        cardName: "Monstera Plant",
        bgColor: "#F0EBE6",
        cardImg: card2,
      },
      {
        cardName: "Pottel Plant",
        bgColor: "#E2ECE4",
        cardImg: card3,
      },
      {
        cardName: "Indoor Plant",
        bgColor: "#E7EEED",
        cardImg: card4,
      },
    ];
    return (
      <>
        {cardsData.map((item) => (
          <Card
            key={item.cardName}
            cardName={item.cardName}
            bgColor={item.bgColor}
            cardImg={item.cardImg}
          />
        ))}
      </>
    );
  }
}
