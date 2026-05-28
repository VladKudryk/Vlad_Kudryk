import { useState, useEffect } from 'react';
 
const labels = {
  ua: {
    theme: 'Тема',
    toggleBtn: 'Перемкнути тему',
    username: "Ім'я користувача",
    language: 'Мова',
    empty: 'не вказано',
  },
  en: {
    theme: 'Theme',
    toggleBtn: 'Toggle theme',
    username: 'Username',
    language: 'Language',
    empty: 'not set',
  },
  pl: {
    theme: 'Motyw',
    toggleBtn: 'Przełącz motyw',
    username: 'Nazwa użytkownika',
    language: 'Język',
    empty: 'nie podano',
  },
};
 
function Header({ language }) {
  return (
    <header>
      <h1>{labels[language].title}</h1>
    </header>
  );
}
 
function SettingsPanel({ settings, onThemeToggle, onUsernameChange, onLanguageChange }) {
  const t = labels[settings.language];
 
  return (
    <div>
      <p>{t.theme}: {settings.theme}</p>
      <button onClick={onThemeToggle}>{t.toggleBtn}</button>
 
      <div>
        <label>{t.username}: </label>
        <input
          type="text"
          value={settings.username}
          onChange={onUsernameChange}
        />
      </div>
 
      <div>
        <label>{t.language}: </label>
        <select value={settings.language} onChange={onLanguageChange}>
          <option value="ua">Українська</option>
          <option value="en">English</option>
          <option value="pl">Polski</option>
        </select>
      </div>
    </div>
  );
}
 
function PreviewBlock({ settings }) {
  const t = labels[settings.language];
 
  return (
    <div>
      <h2>{t.previewTitle}</h2>
      <p>{t.theme}: {settings.theme}</p>
      <p>{t.username}: {settings.username || t.empty}</p>
      <p>{t.language}: {settings.language}</p>
    </div>
  );
}
 
function App() {
  const [settings, setSettings] = useState({
    theme: 'light',
    username: '',
    language: 'ua',
  });
 
  useEffect(() => {
    console.log(settings);
  }, [settings]);
 
  const handleThemeToggle = () => {
    setSettings(prev => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }));
  };
 
  const handleUsernameChange = (e) => {
    setSettings(prev => ({ ...prev, username: e.target.value }));
  };
 
  const handleLanguageChange = (e) => {
    setSettings(prev => ({ ...prev, language: e.target.value }));
  };
 
  const style = {
    background: settings.theme === 'light' ? '#ffffff' : '#222222',
    color: settings.theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    padding: '20px',
  };
 
  return (
    <div style={style}>
      <Header language={settings.language} />
      <SettingsPanel
        settings={settings}
        onThemeToggle={handleThemeToggle}
        onUsernameChange={handleUsernameChange}
        onLanguageChange={handleLanguageChange}
      />
      <PreviewBlock settings={settings} />
    </div>
  );
}
 
export default App;
