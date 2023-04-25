import React from "react";

class Mycomponent extends React.Component {
  state = {
    active: true,
  };

  show = () => {
    this.setState({
      active: true,
    });
  };

  hide = () => {
    this.setState({
      active: false,
    });
  };

  render() {
    const { active } = this.state;
    return (
      <div className="container">
        <div className="">
          {active ? (
            <div className="row col-md-3 text-center">
              <div className="card">
                <h1>Mycomponent</h1>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="child col-md-1">
            <button
              className="btn btn-outline-success m-2 text-center"
              onClick={this.show}
            >
              Show
            </button>
            <button
              className="btn btn-outline-danger m-2 text-center"
              onClick={this.hide}
            >
              Hide
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Mycomponent;
