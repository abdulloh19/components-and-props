import React from "react";
import CHildComponent from "./childComponant";
import Mycomponent from "./myComponent";
import Comp from "./computer";
import { Modal } from "bootstrap";
import InputRadio from "./input";
import Users from "./users";
import CardUsers from "./CardUsers";

class App extends React.Component {
  // state = {
  //   users: [
  //     {
  //       name: "Gorilla",
  //       lastName: "Gorilla beringe",
  //       ves: "250kg",
  //       meat: "Meat",
  //     },
  //     {
  //       name: "lion",
  //       lastName: "Panter lio",
  //       ves: "140kg",
  //       meat: "Plants, insects",
  //     },
  //     {
  //       name: "Zebra",
  //       lastName: "Equus quagga",
  //       ves: "350kg",
  //       meat: "plants",
  //     },
  //   ],
  // };

  render() {
    // const { users } = this.state;
    return (
      <div className="container">
        {/* <h1 className="title">Animals</h1>
        <div className=" mx-5 my-4 wrapper">
          {users.map((item) => {
            return (
              <div className="row wrapper2 mt-3">
                <CHildComponent users={item} />
              </div>
            );
          })}
        </div> */}

        {/* <Mycomponent /> */}
        {/* <Comp /> */}
        {/* <InputRadio /> */}
        {/* <Users /> */}
        <CardUsers />
      </div>
    );
  }
}

export default App;
