import React, { Component } from "react";
import photo from "../img/nr_3.png";
import { Link } from "react-router-dom";
import Contact from "./Contact.js";
import PostText from "./PostText.json";

export default class Post extends Component {
  render() {
    const post = {
      avatar: photo,
      name: "Normunds Rozensteins",
      text: PostText.text,
      _id: 1,
      likes: [1, 2]
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <div className="card card-body mb-3">
              <div className="row">
                <div className="col-md-2">
                  <a href="profile.html">
                    <img
                      className="rounded-circle d-none d-md-block"
                      src={post.avatar}
                      alt=""
                    />
                  </a>
                  <br />
                  <p className="text-center">{post.name}</p>
                </div>
                <div className="col-md-10">
                  <p className="lead ">{post.text}</p>

                  <span>
                    <button type="button" className="btn btn-light mr-1">
                      <i className="fas fa-thumbs-up" />
                      <span className="badge badge-light">
                        {post.likes.length}
                      </span>
                    </button>

                    <Link
                      to={`/post/${post._id}`}
                      className="btn btn-info mr-1"
                    >
                      Comments
                    </Link>

                    <button type="button" className="btn btn-danger mr-1">
                      <i className="fas fa-times" />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}
