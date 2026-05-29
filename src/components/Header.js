export default function Header() {
  return (
    <header style={{ background: '#1A1A18', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <h1 style={{ fontFamily: 'Unbounded, sans-serif', fontSize: 18, color: '#fff', margin: 0 }}>
          <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#E55A2B', marginRight: 10 }} />
          НотатокМенеджер
        </h1>
      </div>
    </header>
  );
}
