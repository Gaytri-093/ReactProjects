import React from 'react';
import BookItem from './BookItem';

const BookList = ({
  books,
  startEditing,
  deleteBook,
  editingIndex,
  editTitle,
  editAuthor,
  setEditTitle,
  setEditAuthor,
  saveEdit,
  cancelEdit
}) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookItem
          key={index}
          book={book}
          index={index}
          startEditing={startEditing}
          deleteBook={deleteBook}
          isEditing={editingIndex === index}
          editTitle={editTitle}
          editAuthor={editAuthor}
          setEditTitle={setEditTitle}
          setEditAuthor={setEditAuthor}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      ))}
    </div>
  );
};

export default BookList;
