import React from "react";
import { HashLink as Link } from "react-router-hash-link";

// Stylesheets
import "../styles/Navbar.css";

// Icons
import CloseIcon from "../assets/close.svg";
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
        <nav className="navbar-container">
          <div className="navbar">
            <Link to="/">
              <img src={LogoIcon} alt="logo" />
            </Link>
            <img src={this.state.toggle ? CloseIcon : MenuIcon} alt="menu" onClick={this.toggleHander} />
          </div>
          <div className="navbar-overflow" style={{ display: this.state.toggle ? "flex" : "none" }}>
            <Link onClick={this.toggleHander} to="/about">
              About
            </Link>
            <Link onClick={this.toggleHander} to="/#section-work">
              Work
            </Link>
            <p>Contact</p>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
