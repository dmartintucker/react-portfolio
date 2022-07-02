import React from "react";

import "../styles/Navbar.css";

import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/menu.svg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };

    this.toggleHander = () => {
      this.setState(({ toggle }) => ({ toggle: !toggle }));
    };
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar-container" style={{ overflow: this.state.toggle ? "auto" : "hidden" }}>
          <div className="navbar">
            <img src={LogoIcon} alt="logo" />
            <img src={MenuIcon} alt="menu" onClick={this.toggleHander} />
          </div>
          <div className="navbar-overflow">
            <p>About</p>
            <p>Work</p>
            <p>Contact</p>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
