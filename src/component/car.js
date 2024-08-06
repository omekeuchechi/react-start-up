import React, { Component } from 'react'

export default class Car extends Component {
    constructor(props){
        super(props);
        this.style = {
            brand: "ford",
            model: "mustang",
            year: "1964"

        };
    }
  render() {
    return (
    <div>
      <h2>my {this.state.brand}</h2>
      <p>it is a{this.state.model} from {this.state.year}</p>
    </div>
    );
  }
}
