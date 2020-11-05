import React from "react";

// yet to implement selector

export const EntryListFilter = (props) => {

  return (
    <div>
      <input
        className="searchBar"
        type="text"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
      <select
        className="pullDown"
        value={props.search}
        onChange={(e) =>
          props.setSearch(e.target.value)
        }
      >
        <option value="Title">Title</option>
        <option value="Content">Content</option>
      </select>
    </div>
  );
};
