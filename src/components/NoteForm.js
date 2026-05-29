import { useState, useRef } from 'react';
import { useNotes } from '../context/NoteContext';

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const titleRef = useRef(null); 
  const { addNote } = useNotes();  

  const handleSubmit = () => {
    if (!title.trim()) {
      setError('Будь ласка, введіть заголовок');
      titleRef.current.focus(); 
      return;
    }
    setError('');
    addNote(title.trim(), text.trim());
    setTitle('');
    setText('');
    titleRef.current.focus();
  };

  return (
    <div style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem', borderTop: '3px solid #E55A2B' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={{ fontSize: 11, color: '#888', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Заголовок</label>
          <input
            ref={titleRef}
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Назва нотатки..."
            style={{ width: '100%', border: '0.5px solid rgba(0,0,0,0.12)', borderRadius: 8, padding: '10px 14px', fontSize: 14, outline: 'none' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <button onClick={handleSubmit} style={{ background: '#E55A2B', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 24px', fontSize: 14, cursor: 'pointer', fontWeight: 500 }}>
            + Додати нотатку
          </button>
        </div>
      </div>
      <label style={{ fontSize: 11, color: '#888', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>Текст</label>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Ваш текст..."
        rows={3}
        style={{ width: '100%', border: '0.5px solid rgba(0,0,0,0.12)', borderRadius: 8, padding: '10px 14px', fontSize: 14, resize: 'vertical', outline: 'none', marginBottom: 8 }}
      />
      {error && <p style={{ fontSize: 12, color: '#A32D2D', margin: 0 }}>{error}</p>}
    </div>
  );
}
