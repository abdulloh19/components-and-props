import React from "react";
import ActivesUsers from "./ActivesUsers";

class CardUsers extends React.Component {
  state = {
    users: [
      {
        Name: "Xalimov Abdusobir",
        // LastName: "Karimov Zubayr",
        // Name: "Umar Ibn Xattob",
      },

    ],
    actives: [{}],
  };

  onPushUsers = () => {
    const { users, actives } = this.state;
    this.setState({
      actives: users,
      users: [],
    });
  };
  onReturnUsers = () => {
    const { users, actives } = this.state;
    this.setState({
      users: actives,
      actives: [],
    });
  };

  render() {
    return (
      <div className="row mx-1 offset-2 mt-5">
        <div className="col-md-12">
          <div className="card row ">
            <div className="card mx-3 col-md-6 text-center p-5 mt-5 ">
              <h1>Users</h1>
            </div>
            <form className="form row mt-5">
              {this.state.users.map((item, index) => (
                <div key={index}>
                  <div>
                    <label for="chack">{item.Name}</label>
                    <input type="checkbox" className="form-check-input mx-5" />
                  </div>
                </div>
              ))}
            </form>
            <div className="row col-md-2 mt-3 mx-1 mb-5">
              <button className="btn btn-success" onClick={this.onPushUsers}>
                O'tkazish
              </button>
            </div>

            <div className="col-md-12">
              <div>
                <div className="card col-md-6 text-center p-5 mt-5 ">
                  <h1>Actives</h1>
                </div>
                {this.state.actives.map((item, index) => (
                  <div key={index}>
                    <div key={index}>
                      <label for="checked">{item.Name}</label>
                      <input
                        id="checked"
                        className="form-check-input mx-5"
                        type="checkbox"
                      />
                    </div>
                    <div className="row col-md-2 mt-3 mx-1 mb-5">
                      <button
                        className="btn btn-success"
                        onClick={this.onReturnUsers}
                      >
                        Qaytarish ortga
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardUsers;
