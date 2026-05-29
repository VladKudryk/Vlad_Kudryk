import { useNotes } from '../context/NoteContext';

export default function NoteSearch() {
  const { search, setSearch } = useNotes(); 

  return (
    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#888', fontSize: 16 }}>🔍</span>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)} 
        placeholder="Пошук за заголовком..."
        style={{ width: '100%', border: '0.5px solid rgba(0,0,0,0.1)', borderRadius: 8, padding: '10px 14px 10px 38px', fontSize: 14, background: '#fff', outline: 'none' }}
      />
    </div>
  );
}
