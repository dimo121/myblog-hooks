import { connect } from "react-redux";
import { BlogItem } from "./BlogItem";
import { EntryListFilter } from "./EntryListFilter";
import React from "react";

function Dashboard(props) {
  //useEffect to filter blogs depending on user

  return (
    <div className="search__container">
      <EntryListFilter />
      {props.blogs.map((item) => (
        <BlogItem key={item.id} blog={item} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps)(Dashboard);
