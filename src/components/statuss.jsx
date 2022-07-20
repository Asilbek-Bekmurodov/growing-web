import React, { Component } from "react";
import Status from "./status";

export default class Statuss extends Component {
  render() {
    const statusData = [
      { counter: "2000+", title: "Delivery" },
      { counter: "1200+", title: "Customers" },
      { counter: "1000+", title: "Customers" }
    ];
    return (
      <>
        {statusData.map((item) => (
          <Status counter={item.counter} title={item.title} />
        ))}
      </>
    );
  }
}
