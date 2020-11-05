import { connect } from "react-redux";
import { BlogItem } from "./BlogItem";
import { EntryListFilter } from "./EntryListFilter";
import React, { useState, useEffect } from "react";

const Dashboard = (props) => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("Title");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if(search === "Title"){
      setResult(props.blogs.filter(item => item.title.includes(text)));
    } else {
      setResult(props.blogs.filter(item => item.content.includes(text)));
    }
  }, [text,search]);

  return (
    <div className="main__container">
      <EntryListFilter  text = {text} 
                        search = {search}
                        setText={setText} 
                        setSearch={setSearch}/>
      { result.map((item) => (
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
