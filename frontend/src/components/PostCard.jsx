import React, { Component } from "react";

export default class PostCard extends Component {
  render() {
    return (
      <div className="card mt-3">
        <div
          className="card-img-top"
          style={{
            height: "250px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeate",
            backgroundSize: "cover",
            backgroundImage: `url(${this.props.imageUrl})`,
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{this.props.authorName}</h5>
          <p
            className="card-text"
            style={{
              height: "170px",
              overflow: "hidden",
            }}
          >
            {this.props.content}
          </p>
          <p className="container">
            <p className="far fa-heart ml-3 pr-3" > 2.000</p>
            <i className="far fa-comment-alt ml-3"> 60</i>
          </p>
        </div>
      </div>
    );
  }
}
