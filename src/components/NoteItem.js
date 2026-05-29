import { useNotes } from '../context/NoteContext';

export default function NoteItem({ note, index }) {
  const { deleteNote } = useNotes(); 

  return (
    <div style={{
      background: '#fff',
      border: '0.5px solid rgba(0,0,0,0.08)',
      borderRadius: 12,
      padding: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#F5C4B3' }} />
      <span style={{ fontSize: 11, color: '#888', fontWeight: 500 }}>
        #{String(index + 1).padStart(2, '0')}
      </span>
      <h3 style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4, margin: 0 }}>
        {note.title}
      </h3>
      <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6, flex: 1, margin: 0 }}>
        {note.text} 
      </p>
      <button
        onClick={() => deleteNote(note.id)} // обробка події
        style={{ alignSelf: 'flex-end', background: 'none', border: '0.5px solid rgba(163,45,45,.3)', borderRadius: 6, color: '#A32D2D', fontSize: 12, padding: '5px 10px', cursor: 'pointer' }}
      >
        🗑 Видалити
      </button>
    </div>
  );
}
