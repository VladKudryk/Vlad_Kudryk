import { useNotes } from '../context/NoteContext';
import NoteItem from './NoteItem';

export default function NoteList() {
  const { notes, allNotes } = useNotes();

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}> Нотатки </h2>
        {notes.length > 0 && (
          <span style={{ fontSize: 12, color: '#888' }}>
            {notes.length === allNotes.length
              ? `${notes.length} шт.`
              : `${notes.length} з ${allNotes.length}`}
          </span>
        )}
      </div>
      {notes.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#888' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
          <p style={{ fontSize: 14, fontWeight: 600 }}>Нотаток немає</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
          {notes.map((note, index) => (
            <NoteItem key={note.id} note={note} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
