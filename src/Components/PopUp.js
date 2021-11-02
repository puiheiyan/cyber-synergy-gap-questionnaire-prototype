import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <h2>Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a orci sit amet purus porta condimentum at eu tortor. Mauris et vestibulum augue. 
            Vivamus a urna et diam posuere tristique eu eu mi. In non mollis orci, eu aliquam purus. Donec pretium tellus sed felis ultricies tempor. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed magna id urna consectetur posuere. Suspendisse aliquet leo purus, 
            lacinia fermentum dolor luctus et. Nulla lacus mauris, fringilla non lectus in, porttitor congue ante. Sed et scelerisque dolor. Donec 
            dapibus lobortis elit non dignissim.
          </p>
        </div>
      </div>
    );
  }
}
