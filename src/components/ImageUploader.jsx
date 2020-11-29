import React, { Component } from "react";
import "./imageUploader.css";
import { Link } from "react-router-dom";

class ImageUploader extends Component {
  render() {
    return (
      <div className="add-photo-container">
        <input className="file-container" type="file" id="multi" multiple />
        <Link to="thingsHappend/new">
          <button className="btn btn-primary ">Add More Memories</button>
        </Link>
      </div>
    );
  }
}

export default ImageUploader;
