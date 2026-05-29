export default function Footer() {
  return (
    <footer style={{ background: '#1A1A18', padding: '.75rem 2rem', textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
      Менеджер нотаток · Варіант 4 · &copy; {new Date().getFullYear()}
    </footer>
  );
}
