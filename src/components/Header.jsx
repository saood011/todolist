import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="bg-dark container jumbotron">
        <div className="d-flex justify-content-between align-items-center">
          <p className="text-white h3 p-2 border">Todo App</p>
          <p className=" border border-dark p-2">by Saood</p>
        </div>
      </div>
    );
  }
}

export default Header;
