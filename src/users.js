import React from "react";
import ModalForm from "./ModalForm";

class Users extends React.Component {
  state = {
    users: [],
    user: {
      FirstName: "",
      LastName: "",
      Age: "",
      Mail: "",
    },
    modalVisible: false,
    serch: "",
  };

  onChengeFirst = (evt) => {
    const { user } = this.state;
    user.FirstName = evt.target.value;
    this.setState({
      user,
    });
  };

  modalOpen = () => {
    this.setState({
      modalVisible: true,
    });
  };

  onCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };

  onSave = () => {
    const { user, users } = this.state;
    users.push(user);
    this.setState({
      users: users,
      modalVisible: false,
      user: {},
    });
  };

  onchangeSerach = (event) => {
    this.setState({
      serch: event.target.value,
    });
  };

  onChangeLatsName = (event) => {
    const { user } = this.state;
    user.LastName = event.target.value;
    this.setState({
      user,
    });
  };

  onChangeNumber = (event) => {
    const { user } = this.state;
    user.Age = event.target.value;
    this.setState({
      user,
    });
  };

  onChangeMail = (event) => {
    const { user } = this.state;
    user.Mail = event.target.value;
    this.setState({
      user,
    });
  };

  onDelete = (index) => {
    const remove = this.state.users;
    remove.splice(index, 1);
    this.setState({
      remove,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.modalVisible ? (
            <ModalForm
              onChengeFirst={this.onChengeFirst}
              onCancel={this.onCancel}
              onSave={this.onSave}
              onChangeLatsName={this.onChangeLatsName}
              onChangeNumber={this.onChangeNumber}
              onChangeMail={this.onChangeMail}
            />
          ) : (
            ""
          )}
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-md-12 d-flex justify-content-between">
            <input
              type="text"
              onChange={this.onchangeSerach}
              placeholder=" Search..."
            />
            <button className="btn btn-info col-md-2" onClick={this.modalOpen}>
              Modal open
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <th>No</th>
                <th>FirsName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Mail</th>
                <th>Delete</th>
              </thead>
              <h1>{this.state.user.FirstName}</h1>

              <tbody>
                {this.state.users
                  .filter((item) => {
                    if (this.state.serch === "") {
                      return item;
                    } else if (
                      item.FirstName.toUpperCase().includes(
                        this.state.serch.toUpperCase()
                      )
                    ) {
                      return item;
                    } else {
                      return item;
                    }
                  })
                  .map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.FirstName}</td>
                      <td>{item.LastName}</td>
                      <td>{item.Age}</td>
                      <td>{item.Mail}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.onDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
