import React from 'react';

const Note = (props) => {
    const style = {backgroundColor: props.note.color};
    return(
        <div className='note' style={style}>
            <span
                className='delete-note'
                onClick={() => props.onDelete(props.note.id) }>
                x
            </span>
            {props.note.text}
        </div>
    )
}

export default Note;