import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3001/books"
      );

      if (!response.ok) {
        throw new Error("Помилка завантаження");
      }

      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addBook = async (e) => {
    e.preventDefault();

    if (!title || !author || !year) {
      alert("Заповніть усі поля");
      return;
    }

    const book = {
      title,
      author,
      year,
    };

    const response = await fetch(
      "http://localhost:3001/books",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      }
    );

    const newBook = await response.json();

    setBooks([...books, newBook]);

    setTitle("");
    setAuthor("");
    setYear("");
  };

  const deleteBook = async (id) => {
    await fetch(
      `http://localhost:3001/books/${id}`,
      {
        method: "DELETE",
      }
    );

    setBooks(
      books.filter((book) => book.id !== id)
    );
  };

  const filteredBooks = books.filter((book) =>
    book.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Система керування книгами</h1>

      <form onSubmit={addBook}>
        <input
          type="text"
          placeholder="Назва книги"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Автор"
          value={author}
          onChange={(e) =>
            setAuthor(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Рік"
          value={year}
          onChange={(e) =>
            setYear(e.target.value)
          }
        />

        <button type="submit">
          Додати книгу
        </button>
      </form>

      <input
        className="search"
        type="text"
        placeholder="Пошук книги..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {loading && <p>Завантаження...</p>}

      {error && <p>{error}</p>}

      {!loading &&
        filteredBooks.map((book) => (
          <div className="book" key={book.id}>
            <h3>{book.title}</h3>

            <p>Автор: {book.author}</p>

            <p>Рік: {book.year}</p>

            <button
              onClick={() =>
                deleteBook(book.id)
              }
            >
              Видалити
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;