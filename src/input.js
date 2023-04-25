import React from "react";

class InputRadio extends React.Component {
  state = {
    radio1: "",
    radio2: "",
  };

  InputRadi1 = () => {
    this.setState({
      radio1: "siz ushbu amalga rozisiz",
    });
  };
  InputRadi2 = () => {
    this.setState({
      radio2: "siz ushbu amalga qarshisiz",
      
    });
  };

  render() {
    return (
      <div className="container">
        <form>
          <label name="yes">
            <input
              type="radio"
              name="yes"
              className="mx-2"
              onChange={this.InputRadi1}
            />
            Yes
          </label>
          <h2>{this.state.radio1}</h2>
          <label name="yes">
            <input
              type="radio"
              name="yes"
              className="mx-2"
              onChange={this.InputRadi2}
            />
            No
          </label>
          <h2>{this.state.radio2}</h2>
        </form>
      </div>
    );
  }
}

export default InputRadio;
