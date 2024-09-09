import React from 'react';
import OneNote from './oneNote';

function SavedNotes ({ notes, deleteNote, updateNote }) {    
  return (
    <div className="notes-container">
      <h1>My travel notes</h1>
        <ol>
          {notes.map((note) => (
            <OneNote
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            updateNote={updateNote}
            />
            ))
            .reverse()
          }
        </ol>
    </div>
  );
}

export default SavedNotes;