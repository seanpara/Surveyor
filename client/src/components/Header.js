import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo" href="">
            Surveyor
          </a>
          <ul className="right">
            <a href="">Login With Google</a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
