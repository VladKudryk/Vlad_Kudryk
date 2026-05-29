// App.js
import { NoteProvider } from './context/NoteContext';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteSearch from './components/NoteSearch';
import NoteList from './components/NoteList';
import Footer from './components/Footer';

export default function App() {
  return (
    <NoteProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1, padding: '2rem', maxWidth: 860, margin: '0 auto', width: '100%' }}>
          <NoteForm />
          <NoteSearch />
          <NoteList />
        </main>
        <Footer />
      </div>
    </NoteProvider>
  );
}
