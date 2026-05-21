const styles = {
  body: {
    fontFamily: "Segoe UI, sans-serif",
    background: "#f4f4f4",
    minHeight: "100vh",
    margin: 0,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: "#1a1a2e",
    color: "#fff",
    padding: "16px 24px",
    textAlign: "center",
  },
  headerTitle: {
    margin: 0,
    fontSize: 24,
    fontWeight: 700,
  },
  main: {
    flex: 1,
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    padding: 24,
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    borderRadius: 10,
    padding: "20px 24px",
    width: 220,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderTop: "4px solid #1a1a2e",
  },
  cardTitle: {
    margin: "0 0 10px",
    fontSize: 18,
    fontWeight: 700,
    color: "#1a1a2e",
  },
  cardText: {
    margin: "4px 0",
    fontSize: 14,
    color: "#555",
  },
  footer: {
    background: "#1a1a2e",
    color: "#aaa",
    textAlign: "center",
    padding: "12px 24px",
    fontSize: 13,
  },
};
 
// Header компонент
function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.headerTitle}>🎮 Список ігор</h1>
    </header>
  );
}
 
// GameCard компонент
function GameCard({ title, genre, platform }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>{title}</h2>
      <p style={styles.cardText}>Жанр: {genre}</p>
      <p style={styles.cardText}>Платформа: {platform}</p>
    </div>
  );
}
 
// Footer компонент
function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0 }}>© 2024 Список ігор</p>
    </footer>
  );
}
 
// App
export default function App() {
  return (
    <div style={styles.body}>
      <Header />
 
      <main style={styles.main}>
        <GameCard
          title="GTA V"
          genre="Екшн"
          platform="PC"
        />
        <GameCard
          title="Valheim"
          genre="Виживання"
          platform="PC"
        />
        <GameCard
          title="Apex Legends"
          genre="Королівська битва"
          platform="PC"
        />
        <GameCard
          title="Civilization 6"
          genre="Стратегія"
          platform="PC"
        />
        <GameCard
          title="Squad"
          genre="Тактичний шутер"
          platform="PC"
        />
        <GameCard
          title="Terraria"
          genre="Пісочниця"
          platform="PC"
        />
      </main>
 
      <Footer />
    </div>
  );
}