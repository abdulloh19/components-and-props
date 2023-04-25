import React from "react";

class Modal extends React.Component {
  componentWillUnmount() {
    this.props.clearCurrentItem();
  }

  onCancelBtn = () => {
    this.props.hideModal();
  };

  onChangeBtn = (type, isIncrement) => {
    this.props.changeCurrentItem(type, isIncrement);
  };

  saveBtn = () => {
    this.props.saveComputer();
  };

  render() {
    const { currenItem, disabled } = this.props;
    return (
      <div className="row">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h2>Add Computer</h2>
            </div>
            <div className="card-body">
              <h4>Ram:</h4>
              <button
                className="btn btn-info"
                onClick={() => this.onChangeBtn("RAM", true)}
              >
                +
              </button>
              {currenItem ? currenItem.ram : 0}
              <button
                className="btn btn-danger"
                onClick={() => this.onChangeBtn("RAM", false)}
              >
                -
              </button>
              <h4>Protsessor:</h4>
              <button
                className="btn btn-info"
                onClick={() => this.onChangeBtn("CPU", true)}
              >
                +
              </button>
              {currenItem ? currenItem.protsessor : 0}
              <button
                className="btn btn-danger"
                onClick={() => this.onChangeBtn("CPU", false)}
              >
                -
              </button>
              <h4>SSD:</h4>
              <button
                className="btn btn-info"
                onClick={() => this.onChangeBtn("SSD", true)}
              >
                +
              </button>
              {currenItem ? currenItem.ssd : 0}
              <button
                className="btn btn-danger"
                onClick={() => this.onChangeBtn("SSD", false)}
              >
                -
              </button>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-success mx-2"
                onClick={this.saveBtn}
                disabled={disabled}
              >
                Save
              </button>
              <button className="btn btn-danger" onClick={this.onCancelBtn}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
