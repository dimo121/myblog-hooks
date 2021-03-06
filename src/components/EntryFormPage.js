import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";

export default function EntryFormPage (props) {
  const [createdAt, setTime] = useState(
    DateTime.local().toLocaleString(DateTime.DATETIME_MED)
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);

  const onContentChange = (e) => setContent(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError("Both title and content are required");
    } else {
      setError('');
      props.onSubmit({
        title,
        content,
        createdAt
      });
    }
  };

  useEffect(() => {
    setTime(DateTime.local().toLocaleString(DateTime.DATETIME_MED));
  }, []);

  return (
    <div className="entry__container">
      {error && <p data-testid="error">Error : {error}</p>}
      <form onSubmit={onSubmit}
            name="entryForm"
            role = "entryForm">
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          data-testid="title"
          name="title"
          placeholder="Blog title"
          onChange={onTitleChange}
        ></input>
        <br />
        <br />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          className="entry__textarea"
          type="text"
          data-testid="content"
          name="content"
          cols="120"
          rows="20"
          placeholder="Please describe the blog"
          onChange={onContentChange}
        ></textarea>
        <br />
        <br />
        <input className="button" type="submit" value="Save entry" />
      </form>
    </div>
  );
}
