import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './Note';
import App6 from './App6';

const App5 = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    axios.put(url, changedNote).then((response) => {
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    });
  };

  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/notes').then((response) => {
      console.log('promise fulfilled');
      setNotes(response.data);
    });
  }, []);

  console.log('render', notes.length, 'notes');

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      exe: Math.trunc(Math.random() * 30),
    };

    axios.post('http://localhost:3001/notes', noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote('');
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  const total = notes.reduce((sum, idx) => {
    return sum + idx.exe;
  }, 0);
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show{showAll ? 'important' : 'all'}
        </button>
      </div>
      <p>To show</p>
      <ul>
        {notesToShow.map((note, i) => (
          <Note
            key={i}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>Save</button>
      </form>

      <p>Total:{total}</p>
    </div>
  );
};

export default App5;
