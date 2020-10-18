import { connect } from "react-redux";
import { startCreateEntry } from "../actions/entries";
import { EntryFormPage } from "./EntryFormPage";
import React, { useEffect, useState } from "react";

const CreateEntry = (props) => {
  const [blog_id, setId] = useState(0);

  useEffect(() => {
    setId(props.location.state.blog_id);
  }, []);

  return (
    <div className="create__container">
      <h1>Create entry</h1>
      <EntryFormPage
        onSubmit={(entry) => {
          props.dispatch(
            startCreateEntry({
              blog_id,
              ...entry,
            })
          );
          props.history.push("/");
        }}
      />
    </div>
  );
};

export default connect()(CreateEntry);
