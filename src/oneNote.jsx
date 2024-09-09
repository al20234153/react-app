import React, { useState } from 'react';
import { ImLocation } from 'react-icons/im';
import { ImClock } from 'react-icons/im';

function OneNote ({ note, deleteNote, updateNote }) {
  const [editedText, setEditedText] = useState(note.text);
  const [isEditing, setIsEditing] = useState(false);
  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    updateNote(note.id, editedText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div className='edit'>
          <textarea
          type="text"
          value={editedText}
          onChange={handleTextChange}
          />
          <button onClick={handleSave}>Save note</button>
        </div>
      ) : (          
          <div>
            <div className='saved'>
            <span>{note.text}</span>            
            <p><ImLocation style={{ marginRight: 5 }}></ImLocation> {note.city}, {note.country} </p>
            <p><ImClock style={{ marginRight: 5 }}></ImClock> {note.date} </p>
            </div>
            <div className='buttons'>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
          </div>        
      )}
    </li>
  );
}

export default OneNote;
