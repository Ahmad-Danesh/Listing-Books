import { useState } from "react";
export default function App() {
    const [books, setBooks] = useState([]);
    function handleAddBook(newBook) {
        setBooks(() => [...books, newBook]);
    }
      function handleDeleteBook(id) {
        setBooks(
            books.filter((book) => book.id !== id)
        );
    }
    return (
        <div className="app">
            <h1 className="title">📚 Simple Book List</h1>
            <BookForm onAddBook={handleAddBook} />
            <BookList books={books} onDeleteBook={handleDeleteBook}/>
        </div>
    );
}
function BookForm({onAddBook}) {
    const [name, setName] = useState("");
    const [error, setError] = useState("")

function handleAdd() {
    if (name.trim() === "") {
        setError("Please enter a book name!");
        return;
    }
    const newBook = {
        id: Date.now(),
        name: name
    };
    onAddBook(newBook);
    setName("");
    setError("");
}
  
    return (
        <div className="book-form">
            <input
                className="book-input"
                type="text"
                placeholder="Book name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button className="add-btn" onClick={handleAdd}>Add Book</button>
        </div>
    );
}
function BookList({ books, onDeleteBook }) {
    return (
        <ul className="book-list">
            {books.map((book) => (
            <li className="book-item" key={book.id}>
            <span className="book-name">{book.name}</span>

            <button className="delete-btn" onClick={() => onDeleteBook(book.id)}>❌</button>
                </li>
            ))}
        </ul>
    );
}