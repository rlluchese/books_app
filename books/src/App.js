import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    var book = {
      id: books.length + 1,
      title
    }

    setBooks([...books, book]);
  };

  const editBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
  
      return book;
    });
  
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
  
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList books={ books } onDelete={ deleteBookById } onEdit={ editBook } />
      <BookCreate onCreate={ createBook } />
    </div>
  );
}

export default App;
