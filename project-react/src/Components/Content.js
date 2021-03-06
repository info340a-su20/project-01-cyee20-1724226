import React, { Component } from "react";
import "../style.css";
import TableSheet from "./TableSheet";

class Content extends Component {
  render() {
    function surveyButton() {
      let content = document.getElementById("content");
      content.style.display = "none";
      let survey = document.getElementById("survey");
      survey.style.display = "block";
    }

    return (
      <main>
        <div>
          <section>
            <TableSheet />
          </section>
          <div className="intro">
            <p>
              Don't see a location on our list? Please share with us by clicking
              on the link!
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={surveyButton}
            >
              Submit Request
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Content;
