import React from "react";
import "./childComponant.css";
class CHildComponent extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="row  card-body ">
        <h4 className="mt-3">{this.props.users.name}</h4>
        <br />
        <br />
        <br />
        <p className="paragrif">{this.props.users.lastName}</p>
        <p className="paragrif">{this.props.users.ves}</p>
        <p className="paragrif">{this.props.users.meat}</p>
      </div>
    );
  }
}

export default CHildComponent;
