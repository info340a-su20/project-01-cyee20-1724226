import React, { Component } from "react";
import "../style.css";

class Survey extends Component {
  render() {
    return (
      <div className="intro">
        <h2>Did we miss any locations? Let us know below!</h2>
        <form id="signUpForm" class="form" novalidate>
          <div class="form-group row">
            <label for="emailInput" class="col-lg-1">
              Category
            </label>
            <div class="col-lg-11">
              <input
                type="email"
                id="emailInput"
                class="form-control"
                required
              ></input>
              <div class="invalid-feedback">Please provide a valid email</div>
            </div>
          </div>

          <div class="form-group row">
            <label for="emailInput" class="col-lg-1">
              Company
            </label>
            <div class="col-lg-11">
              <input
                type="email"
                id="emailInput"
                class="form-control"
                required
              ></input>
              <div class="invalid-feedback">Please provide a valid email</div>
            </div>
          </div>

          <div class="form-group row">
            <label for="emailInput" class="col-lg-1">
              Address
            </label>
            <div class="col-lg-11">
              <input
                type="email"
                id="emailInput"
                class="form-control"
                required
              ></input>
              <div class="invalid-feedback">Please provide a valid email</div>
            </div>
          </div>

          <div class="form-group row">
            <label for="emailInput" class="col-lg-1">
              Phone Number
            </label>
            <div class="col-lg-11">
              <input
                type="email"
                id="emailInput"
                class="form-control"
                required
              ></input>
              <div class="invalid-feedback">Please provide a valid email</div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

export default Survey;
