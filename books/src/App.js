import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    var response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    var newBook = {
      title
    };

    var response = await axios.post("http://localhost:3001/books", newBook);

    setBooks([...books, response.data]);
  };

  const editBook = async (id, newTitle) => {
    var response = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle});

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
  
      return book;
    });
  
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
  
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <h1>Reading list</h1>
      <BookList books={ books } onDelete={ deleteBookById } onEdit={ editBook } />
      <BookCreate onCreate={ createBook } />
    </div>
  );
}

export default App;
