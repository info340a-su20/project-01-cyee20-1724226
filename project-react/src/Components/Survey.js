import React, { Component } from "react";
import "../style.css";

class Survey extends Component {
  render() {
    fetch("../content.json")
      .then((text) => console.log("hello:" + text))
      .catch((err) => {
        console.log("Error Reading data " + err);
      });

    let response = [];
    let saveData = (event) => {
      event.preventDefault();
      let newLocation = [
        document.getElementById("category").value,
        document.getElementById("company").value,
        document.getElementById("address").value,
        document.getElementById("number").value,
      ];
      response.push(newLocation);
      document.querySelector("form").reset();
      console.log(response);
      document.querySelector("tbody").innerHTML = "";
      createTable(response);
    };

    function createTable(response) {
      response.map((submission) => {
        console.log(submission);
        let info = createRow(submission);
        return document.querySelector("tbody").appendChild(info);
      });
    }

    function createRow(detail) {
      let firstCell = document.createElement("tr");
      for (let i = 0; i < detail.length; i++) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(detail[i]);
        cell.appendChild(cellText);
        firstCell.appendChild(cell);
      }
      return firstCell;
    }

    return (
      <div className="intro">
        <h2>Did not see a location on our list? Fill out the form below:</h2>
        <section>
          <form id="signUpForm" className="form" noValidate>
            <div className="form-group row">
              <label htmlFor="category" className="col-lg-1">
                Category
              </label>
              <div className="col-lg-11">
                <select
                  id="category"
                  className="form-control"
                  name="category"
                  required
                >
                  <option value="Food">Food</option>
                  <option value="Shelter">Shelter</option>
                  <option value="Health">Health</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid email
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="company" className="col-lg-1">
                Company
              </label>
              <div className="col-lg-11">
                <input
                  type="text"
                  id="company"
                  className="form-control"
                  required
                ></input>
                <div className="invalid-feedback">
                  Please provide a valid email
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="address" className="col-lg-1">
                Address
              </label>
              <div className="col-lg-11">
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  required
                ></input>
                <div className="invalid-feedback">
                  Please provide a valid email
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="number" className="col-lg-1">
                Phone Number
              </label>
              <div className="col-lg-11">
                <input
                  type="text"
                  id="number"
                  className="form-control"
                  required
                ></input>
                <div className="invalid-feedback">
                  Please provide a valid email
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary"
              id="subButton"
              onClick={saveData}
            >
              Add
            </button>
          </form>
        </section>
        <section>
          <div className="surveyTable">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Company</th>
                  <th>Address</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

export default Survey;
