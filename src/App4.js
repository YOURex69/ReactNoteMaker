import React from 'react';
import Note from './Note';

const App4 = (props) => {
  const { notes_prop } = props;

  const total = notes_prop.reduce((sum, idx) => {
    return sum + idx.exe;
  }, 0);

  return (
    <div>
      <h1> Notes</h1>
      <ul>
        {notes_prop.map((note) => (
          <Note note={note} />
        ))}
      </ul>
      <p>total:{total}</p>
    </div>
  );
};

export default App4;
//<li key={note.id}>{note.content}</li>;
