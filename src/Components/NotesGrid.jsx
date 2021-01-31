import React, {useRef, useEffect} from 'react';
import Note from './Note';
import Masonry from 'masonry-layout';

let msnry;
const NotesGrid = (props) => {
    let grid = useRef(null);

    useEffect(() => {
        msnry = new Masonry(grid.current, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            transitionDuration: '0.2s',
            //initLayout: false
        });
    }, []);

    useEffect(() => {
//        msnry.once('layoutComplete', () => {
//            grid.current.classList.add('load')
        //})
        msnry.reloadItems();
        msnry.layout();
    }, [props]);

    return(
        <div className='notes-grid' ref={grid}>
            {props.notes.map((n) => <Note  key={n.id} note={n} onDelete={props.onDelete} />) }
        </div>
    )
}

export default NotesGrid;