import React, { useRef, useEffect } from "react";
import Note from "./Note";
import Masonry from "masonry-layout";
import { columnWidth, transitionDuration } from "../const";

let msnry;
const NotesGrid = ({ notes, onDelete }) => {
  let grid = useRef(null);

  useEffect(() => {
    msnry = new Masonry(grid.current, {
      itemSelector: ".note",
      columnWidth: columnWidth,
      gutter: 10,
      transitionDuration: transitionDuration
      //initLayout: false
    });
  }, []);

  useEffect(() => {
    //        msnry.once('layoutComplete', () => {
    //            grid.current.classList.add('load')
    //})
    msnry.reloadItems();
    msnry.layout();
  }, [notes]);

  return (
    <div className="notes-grid" ref={grid}>
      {notes.map(n => (
        <Note key={n.id} note={n} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NotesGrid;
