import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./photographs.css";

class Photographs extends Component {
  render() {
    return (
      <div className="container-carousel">
        <Carousel>
          {this.props.photos.map((photo) => (
            <Carousel.Item key={photo._id} interval={1000}>
              <img
                width={500}
                height={360}
                className="d-block w-100"
                src={photo.imageUrl}
                alt="Memories"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <h4>Your Best Memories</h4>
      </div>
    );
  }
}

export default Photographs;
