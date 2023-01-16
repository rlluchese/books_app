import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {
    const [newTitle, setNewTitle] = useState(book.title);
    const { editBook } = useBooksContext();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBook(book.id, newTitle);
    };

    const handleChange = (event) => {
        setNewTitle(event.target.value);
    };

    return (
      <form className="book-edit" onSubmit={ handleSubmit }>
        <input className="input" value={ newTitle } onChange= { handleChange } />
        <button className="button is-primary">Save</button>
      </form>
    );
  }
  
  export default BookEdit;
  