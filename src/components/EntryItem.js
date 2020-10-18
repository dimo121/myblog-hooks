import React from "react";

const EntryItem = (props) => (
  <div className="entryContainer">
    <h1>
      {props.entry.title}
      <span>{props.entry.createdAt}</span>
    </h1>
    <p>{props.entry.description}</p>
  </div>
);

export default EntryItem;
