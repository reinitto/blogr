import React, { Component } from "react";
import picture from "../img/2.jpg";

const imageStyle = {
  width: "auto",
  height: "700px",
  overflow: "hidden"
};

const textStyle = {
  position: "absolute",
  top: "200px",
  left: "0",
  width: "100%"
};

const spanStyle = {
  color: "white",
  font: " bold 45px Helvetica, Sans-Serif",
  background: "rgb(0, 0, 0)",
  background: "rgba(0, 0, 0, 0.7)",
  padding: "10px"
};

const picStyle = {
  width: "100%",
  height: "auto"
};

export default class Top extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={imageStyle}>
              <div style={picStyle}>
                <img src={picture} alt="" />
              </div>

              <h2 style={textStyle}>
                {" "}
                <span style={spanStyle}>#Rozensteins</span>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
