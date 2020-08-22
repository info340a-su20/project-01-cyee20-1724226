import React, { Component } from "react";
import "../style.css";

import CardList from "./CardList";
import CATEGORY_DATA from "../category.json";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import Survey from "./Survey";
import About from "./About";

class Dashboard extends Component {
  render() {
    function contentButton() {
      let content = document.getElementById("content");
      let dashboard = document.getElementById("dashboard");
      dashboard.style.display = "none";
      content.style.display = "block";
      let survey = document.getElementById("survey");
      survey.style.display = "none";
      let about = document.getElementById("about");
      about.style.display = "none";
    }

    function homeButton() {
      let content = document.getElementById("content");
      let dashboard = document.getElementById("dashboard");
      dashboard.style.display = "block";
      content.style.display = "none";
      let survey = document.getElementById("survey");
      survey.style.display = "none";
      let about = document.getElementById("about");
      about.style.display = "none";
    }

    function surveyButton() {
      let content = document.getElementById("content");
      let dashboard = document.getElementById("dashboard");
      dashboard.style.display = "none";
      content.style.display = "none";
      let survey = document.getElementById("survey");
      survey.style.display = "block";
      let about = document.getElementById("about");
      about.style.display = "none";
    }

    function aboutButton() {
      let content = document.getElementById("content");
      let dashboard = document.getElementById("dashboard");
      dashboard.style.display = "none";
      content.style.display = "none";
      let survey = document.getElementById("survey");
      survey.style.display = "none";
      let about = document.getElementById("about");
      about.style.display = "block";
    }

    return (
      <div>
        <div onClick={homeButton}>
          <Header />
        </div>

        <nav>
          <a onClick={aboutButton}>About</a>
          <a onClick={surveyButton}>Survey</a>
        </nav>

        <div id="about">
          <About />
        </div>
        <div id="survey">
          <Survey />
        </div>

        <div id="content">
          <Content />
        </div>

        <div id="dashboard">
          <main>
            <div className="intro">
              <h2>Welcome!</h2>
              <p>
                Thank you for checking out our website. This website is
                dedicated to helping those in the greater Seattle area in need
                with finding resources to help them maintain a healthy and
                sustainable way of life. This website will provide you
                information on places to get food , shelter, and healthcare. By
                clicking a need below, you will discover locations and
                information that will help assist you in your needs.
              </p>
            </div>
            <div>
              <section onClick={contentButton}>
                <CardList category={CATEGORY_DATA} />
              </section>
            </div>
            <p className="intro">
              Thank you for coming by our website. I hope that your experience
              on this website has helped you find what you were looking for.
              Remeber that no matter what happens next things will get better.
              After every storm comes a rainbow. -Homeless Essentials
            </p>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Dashboard;
