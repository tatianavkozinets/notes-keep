import React from "react";
import { columnWidth } from "../const.js";

const Note = ({note, onDelete}) => {
  const style = { backgroundColor: note.color, width: columnWidth - 20 };
  return (
    <div className="note" style={style}>
      <span
        className="delete-note"
        onClick={() => onDelete(note.id)}
      >
        x
      </span>
      {note.text}
    </div>
  );
};

export default Note;
