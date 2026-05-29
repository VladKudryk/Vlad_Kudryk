import { createContext, useState, useContext } from 'react';

export const NoteContext = createContext();

export function NoteProvider({ children }) {
  const [notes, setNotes] = useState([
    
  ]);
  const [search, setSearch] = useState('');

  const addNote = (title, text) => {
    const newNote = { id: Date.now(), title, text };
    setNotes(prev => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <NoteContext.Provider value={{ notes: filteredNotes, allNotes: notes, search, setSearch, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export function useNotes() {
  return useContext(NoteContext);
}
