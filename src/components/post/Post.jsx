import React, { useState, useEffect } from "react";
import "./post.scss";

const Post = (props) => {
  const { id, title, body } = props.data;
  return (
    <div className="card">
      <div className="card-hero">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzg4NQ&ixlib=rb-1.2.1&q=85"
          width="288"
        />
      </div>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="card-footer">
        <div className="footer-item">
          <img
            src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDI3Nzc5MQ&ixlib=rb-1.2.1&q=85"
            className="avatar"
            width="32"
            height="32"
          />
        </div>
        <div className="footer-item">
          <strong>John Doe</strong>
          <span className="muted">2h ago</span>
        </div>
        <div
          className="footer-item"
          style={{ alignItems: "flex-end", flexGrow: 1 }}
        >
          {id}
        </div>
      </div>
    </div>
  );
};
export default Post;
