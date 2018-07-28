import React, { Component } from "react";
import photo from "../img/nr_3.png";
export default class Contact extends Component {
  render() {
    return (
      <div className="card" style={{ width: " 18rem" }}>
        <img className="card-img-top" src={photo} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Par Mani</h5>
          <p className="card-text">
            I'm a professional personal trainer ready to help those in need.
          </p>
          <a href="#" className="btn btn-primary">
            Pieteikties uz konsultaciju
          </a>
        </div>
      </div>
    );
  }
}
