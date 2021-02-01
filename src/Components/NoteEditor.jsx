import React, { useState } from "react";

const NoteEditor = ({ onAdd }) => {
  const [text, setText] = useState("");

  function handleAdd() {
    onAdd(text);
    setText("");
  }

  return (
    <div className="area">
      <textarea
        className="textarea"
        placeholder={"Please enter text"}
        rows="7"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className="add-button"
        onClick={() => {
          if (text !== "") {
            handleAdd();
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default NoteEditor;
