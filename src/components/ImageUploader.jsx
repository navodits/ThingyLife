import React, { Component } from "react";
import "./imageUploader.css";

class ImageUploader extends Component {
  render() {
    return (
      <div className="add-photo-container">
        <input
          className="file-container"
          type="file"
          id="multi"
          onChange={this.props.onChange}
          multiple
        />

        <button className="btn btn-primary " onClick={this.props.onClick}>
          Add More Memories
        </button>
      </div>
    );
  }
}

export default ImageUploader;
