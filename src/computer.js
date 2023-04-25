import React from "react";
import Modal from "./modal";

class Comp extends React.Component {
  state = {
    myComputer: [],
    modal: false,
    currenItem: "",
    disible: true
  };

  componentDidMount() {
    const computer = [
      {
        name: "comp/1",
        protsessor: 8,
        ram: 2,
        ssd: 128,
      },
      {
        name: "comp/2",
        protsessor: 2,
        ram: 8,
        ssd: 256,
      },
      {
        name: "comp/3",
        protsessor: 4,
        ram: 6,
        ssd: 512,
      },
      {
        name: "comp/4",
        protsessor: 6,
        ram: 2,
        ssd: 64,
      },
    ];

    this.setState({
      myComputer: computer,
    });
  }

  removeBtn = (index) => {
    const myComputers = this.state.myComputer;
    myComputers.splice(index, 1);
    this.setState({
      myComputers,
    });
  };

  openModal = () => {
    console.log(this.modal);
    this.setState({
      modal: true,
    });
  };

  hideModal = () => {
    this.setState({
      modal: false,
    });
  };

  changeCurrentItem = (type, isIncrement) => {
    const a = this.state.currenItem
      ? this.state.currenItem
      : { name: "Comp/5", protsessor: 0, ram: 0, ssd: 0 };

    if (type === "RAM") {
      if (isIncrement) {
        a.ram++;
      } else {
        a.ram--;
      }
    }

    if (type === "CPU") {
      if (isIncrement) {
        a.protsessor++;
      } else {
        a.protsessor--;
      }
    }
    if (type === "SSD") {
      if (isIncrement) {
        a.ssd++;
      } else {
        a.ssd--;
      }
    }

    this.setState({
      currenItem: a,
    });
  };

  saveComputer = () => {
    const { myComputer, currenItem } = this.state;
    currenItem.name = "comp/" + (myComputer.length + 1);
    myComputer.push(currenItem);
    this.setState({
      myComputer: myComputer,
      modal: false,
    });
  };

  clearCurrentItem = () => {
    this.setState({
      currenItem: "",
    });
  };

  render() {
    const { myComputer, modal, currenItem } = this.state;
    return (
      <div className="container mt-5">
        {modal ? (
          <Modal
            hideModal={this.hideModal}
            currenItem={currenItem}
            changeCurrentItem={this.changeCurrentItem}
            saveComputer={this.saveComputer}
            clearCurrentItem={this.clearCurrentItem}
          />
        ) : (
          ""
        )}
        <div className="row">
          <div className="text-end col-md-12">
            <button className="btn btn-success" onClick={this.openModal}>
              Add
            </button>
          </div>
          <div className="col-md-12">
            <h1 className="text-center">My Computer</h1>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>N</th>
                  <th>Name</th>
                  <th>Protsessor</th>
                  <th>Ram</th>
                  <th>SSD</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {myComputer.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.protsessor}</td>
                      <td>{item.ram}</td>
                      <td>{item.ssd}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.removeBtn(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Comp;
