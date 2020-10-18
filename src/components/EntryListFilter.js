import React, { useState } from "react";

// yet to implement selector

export const EntryListFilter = (props) => {
  const [text, setText] = useState("");
  const [searchBy, setSearch] = useState("title");

  return (
    <div>
      <input
        className="searchBar"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select
        className="pullDown"
        value={searchBy}
        onChange={(e) =>
          e.target.value === "title" ? setSearch("content") : setSearch("title")
        }
      >
        <option value="title">Title</option>
        <option value="content">Content</option>
      </select>
    </div>
  );
};
