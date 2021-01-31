import React, {useState, useEffect} from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import Search from './Search'

const NotesApp = () => {
    const colorAr = ['FFD700', '20B2AA', '90EE90', '87CEFA', '5F9EA0', 'FFB6C1'];
    const [notes, setNotes] = useState([]);
    const [searchNotes, setSearchNotes] = useState([]);
    let [searchText, setSearchText] = useState('');

    useEffect(()=> {
        let localNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(localNotes);
    },[]);

    useEffect(() => {
        let n = JSON.stringify(notes);
        localStorage.setItem('notes', n);
    }, [notes]);

    function handleAdd(text){
        let colorNumber = Math.floor(Math.random() * colorAr.length);
        const newNote = {
            id: Date.now(),
            color: '#'+ colorAr[colorNumber],
            text: text
        };

        let n = notes.slice();
        n.unshift(newNote);
        setNotes(n);
    }

    function handleDelete(id){
        let n = notes.filter(i => i.id !== id);
        setNotes(n);
    }

    function handleSearh(s){
        setSearchText(s);
        let n = JSON.parse(localStorage.getItem('notes')) || [];
        setSearchNotes(n.filter(n => n.text.includes(s)));
    }

    return(
        <div className='notes-app'>
            <h1 style={{textAlign: 'center'}}>Notes Keep</h1>
            <Search onSearch={handleSearh} searchText={searchText}/>
            {searchText==='' ?
                <>
                    <NoteEditor onAdd={handleAdd} />
                    <NotesGrid notes={notes} onDelete={handleDelete} />
                </> :
                <NotesGrid notes={searchNotes} onDelete={handleDelete} />
            }
        </div>
    );
};

export default NotesApp;