import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./photographs.css";

class Photographs extends Component {
  state = {
    photos: [
      require("../photographs/bike1.jpg"),
      require("../photographs/bike2.jpg"),
      require("../photographs/bike3.jpg"),
    ],
  };
  render() {
    return (
      <div className="container-carousel">
        <Carousel>
          {this.state.photos.map((photo) => (
            <Carousel.Item interval={1000}>
              <img
                width={500}
                height={360}
                className="d-block w-100"
                src={photo}
                alt="Photo"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <h4>Your Best Memorezzzz</h4>
      </div>
    );
  }
}

export default Photographs;
