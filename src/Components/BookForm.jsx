import React, { useState } from 'react';
import './BookForm.css'

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = () => {
    if (title && author) {
      addBook(title, author);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="book-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button className='Add' onClick={handleSubmit}>Add Book</button>
    </div>
  );
};

export default BookForm;
