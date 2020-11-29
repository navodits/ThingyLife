import React, { Component } from "react";

class Star extends Component {
  render() {
    let iconClass = "fa fa-star";

    if (this.props.liked === false) {
      iconClass += "-o";
    }

    return (
      <i
        onClick={this.props.onLiked}
        className={iconClass}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Star;
