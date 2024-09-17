import React, { useState } from 'react';
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');

  const addBook = (title, author) => {
    setBooks([...books, { title, author }]);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditTitle(books[index].title);
    setEditAuthor(books[index].author);
  };

  const saveEdit = () => {
    const updatedBooks = books.map((book, index) =>
      index === editingIndex ? { title: editTitle, author: editAuthor } : book
    );
    setBooks(updatedBooks);
    setEditingIndex(null);
    setEditTitle('');
    setEditAuthor('');
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditTitle('');
    setEditAuthor('');
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h1>Book Management System</h1>
      <BookForm addBook={addBook} />
      <BookList
        books={books}
        startEditing={startEditing}
        deleteBook={deleteBook}
        editingIndex={editingIndex}
        editTitle={editTitle}
        editAuthor={editAuthor}
        setEditTitle={setEditTitle}
        setEditAuthor={setEditAuthor}
        saveEdit={saveEdit}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}

export default App;



// import React from 'react'
// import BookDetails from './components/bookdetails'

// function App() {
//   return (
//     <>
//     <BookDetails/>
//     </>
//   )
// }

// export default App