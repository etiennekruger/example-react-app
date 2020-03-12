import React, { Component } from "react";

import { StyledButton, StyledPrimaryButton } from "./Styles";

export class Button extends Component {
  widget = StyledButton;

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    if (this.props.onClick !== undefined) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <this.widget
        className="button-primary"
        value={this.props.value}
        onClick={this.clickHandler}
      >
        {this.props.label}
      </this.widget>
    );
  }
}

export class PrimaryButton extends Button {
  widget = StyledPrimaryButton;
}
