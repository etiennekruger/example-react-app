import React, { Component } from "react";

import { StyledInput } from "./Styles";

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.transform = this.transform.bind(this);
  }

  transform(value) {
    return value;
  }

  changeHandler(event) {
    if (this.props.onChange !== undefined) {
      const value = this.transform(event.target.value);
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <StyledInput
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.changeHandler}
      />
    );
  }
}

export class UpperCaseTextInput extends TextInput {
  transform(value) {
    return value.toUpperCase();
  }
}
