import React, { Component } from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Post from "./components/Post";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Topbar />
          <Navbar />
          <Post />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
