import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Label from "./Label";
import Result from "./Result";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    let checkResult = "";
    {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: eval(checkResult),
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="MainDiv">
        <Label />
        <div>
          {" "}
          <Result result={this.state.result} />{" "}
        </div>
        <div>
          {" "}
          <Button onClick={this.onClick} />{" "}
        </div>
      </div>
    );
  }
}

export default App;