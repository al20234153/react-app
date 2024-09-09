import React from 'react';
import { useState } from 'react';
import './App.css';
import SavedNotes from './notes';
import NavBar from './navBar';
import AddNewNote from './addNote';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from './profile';

function App() {
  const  [notes, setNotes] = useState([]);
  
  const notesNum = notes.length;
  console.log(notesNum); 
   
  const addNote = (noteText, city, country) => {
    const newNote = {
      id: Date.now(),
      text: noteText,
      city: city, 
      country: country,
      completed: false,
      date: new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }),
    };
    console.log(newNote);           
    setNotes([...notes, newNote]);   
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const updateNote = (noteId, newNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        return { ...note, text: newNote };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <BrowserRouter className="NavBar">
        <NavBar notesNum={notesNum} />
        <Routes>
          <Route path='/' element={
            <SavedNotes
            notes={notes}          
            deleteNote={deleteNote}
            updateNote={updateNote}
            /> 
          } />      
          <Route path="/profile" element={
            <Profile />       
          } />
          <Route path='/notes' element={
            <SavedNotes
            notes={notes}          
            deleteNote={deleteNote}
            updateNote={updateNote}
            />      
          } />
          <Route path='/addNote' element={
            <AddNewNote addNote={addNote} />
          } />
        </Routes>         
      </BrowserRouter>           
    </div>
  ); 
}

export default App;