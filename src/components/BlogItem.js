import React from "react";
import { NavLink } from "react-router-dom";

export const BlogItem = (props) => (
  <div className="blogContainer">
    <NavLink style={{ textDecoration: "none" }} to={`/blog/${props.blog.id}`}>
      <h1>
        {props.blog.title}
        <span className="blogContainer__span">{props.blog.createdAt}</span>
      </h1>
      <p>{props.blog.content}</p>
    </NavLink>
    <p>
      Replies: {props.blog.entries.length}
      <span>
        <NavLink
          to={{
            pathname: "/createentry",
            state: {
              blog_id: props.blog.id,
            },
          }}
        >
          <button>Reply</button>
        </NavLink>
      </span>
    </p>
  </div>
);
