import React, { useState } from 'react';
import UseGeoLocation from './geoLocation';
import { useNavigate } from 'react-router-dom';

function AddNewNote ({ addNote }) {
    
    const navigate = useNavigate();
    const { city, country } = UseGeoLocation();
    const [noteText, setNoteText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (noteText.trim() === '') return;
        addNote(noteText, city, country);
        setNoteText('');
        navigate(`/notes`);    
    };    

    const clearText = (e) => {
        e.preventDefault();
        setNoteText('');           
    };   

    return (
        <div className="form">
            <h2>Add a new note</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                type="text"
                placeholder="Add a note..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                />
                <p>Current Location: {city}, {country} </p>
                <div className='add-note-buttons'>
                    <button type="submit">Save note</button>
                    <button onClick={clearText}>Discard</button>
                </div>
            </form>            
        </div>
    );
}

export default AddNewNote;