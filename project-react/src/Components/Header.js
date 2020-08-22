import React, { Component } from "react";
import "../style.css";

class Header extends Component {
  render() {
    return (
      <header>
        <button type="button" className="headerButton">
          <img src="img/home.png" aria-hidden="true" alt="Logo Image" />
          <h1>Homeless Essentials</h1>
        </button>
      </header>
    );
  }
}

export default Header;
