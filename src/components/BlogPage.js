import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EntryItem from "./EntryItem";

const BlogPage = (props) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    setBlog(props.blogs.find((item) => item.id == props.match.params.id));
  }, []);

  return (
    <div className="search__container">
      <div className="blogContainer">
        <h1>
          {blog.title}
          <span className="blogContainer__span">{blog.createdAt}</span>
        </h1>
        <p>{blog.description}</p>
        <p>Replies: {blog.entries && blog.entries.length}</p>
      </div>
      <div>
        {blog.entries &&
          blog.entries.map((item) => {
            return <EntryItem key={item.id} entry={item} />;
          })}
      </div>
    </div>
  );
};

//<BlogItem key={this.props.match.params.id} blog={this.blog} />

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps)(BlogPage);
