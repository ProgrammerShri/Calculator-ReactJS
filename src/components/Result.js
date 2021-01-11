import React, { Component } from "react";

class Result extends Component {
  render() {
    let { result } = this.props;
    return (
      <div>
      <input className="Input" value={result} />
        {/* <p className="Input"> {result} </p> */}
      </div>
    );
  }
}
export default Result;
