import React, { Component } from "react";
import "../style.css";
import CATEGORY_DATA from "../category.json";

class Card extends Component {
  render() {
    let topic = this.props.category;
    let pic = topic.img;
    return (
      <div className="card">
        <img
          src={require("../img/" + pic + ".jpg")}
          className={"card-img-top"}
          alt={topic.name}
          aria-hidden="true"
        />
        <div className="card-body">
          <h3 className="card-title">{topic.name}</h3>
        </div>
      </div>
    );
  }
}
class CardList extends Component {
  render() {
    let newList = CATEGORY_DATA.map((type) => {
      return <Card key={type.name} category={type} />;
    });

    return <div className="card-deck">{newList}</div>;
  }
}
export default CardList;
