import React from "react";

class ModalForm extends React.Component {
  onChengeFirst = (evt) => {
    this.props.onChengeFirst(evt);
  };

  onCancel = () => {
    this.props.onCancel();
  };

  onClickedAdd = () => {
    this.props.onSave();
  };

  onChangeLatsName = (event) => {
    this.props.onChangeLatsName(event);
  };

  onChangeNumber = (event) => {
    this.props.onChangeNumber(event);
  };

  onChangeMail = (event) => {
    this.props.onChangeMail(event);
  };

  render() {
    return (
      <div className="col-md-5 text-center offset-3 mt-5 mb-5 text-white">
        <div className="card bg-dark ">
          <div className="card-body">
            <label className="mx-2">
              <h4>FirstName</h4>
              <input
                type="text"
                className="form-control"
                placeholder="FirstName"
                onChange={this.onChengeFirst}
              />
            </label>
            <label>
              <h4>LastName</h4>
              <input
                type="text"
                className="form-control"
                placeholder="LastName"
                onChange={this.onChangeLatsName}
              />
            </label>
            <label className="mx-2">
              <h4>Age</h4>
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                onChange={this.onChangeNumber}
              />
            </label>
            <label>
              <h4>Email</h4>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={this.onChangeMail}
              />
            </label>
          </div>
          <div className="card-body d-flex justify-content-between">
            <button className="btn btn-primary" onClick={this.onClickedAdd}>
              Add User
            </button>
            <button className="btn btn-danger" onClick={this.onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalForm;
