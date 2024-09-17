import React from 'react';
import './BookItem.css'

const BookItem = ({
  book,
  index,
  startEditing,
  deleteBook,
  isEditing,
  editTitle,
  editAuthor,
  setEditTitle,
  setEditAuthor,
  saveEdit,
  cancelEdit
}) => {
  return (
    <div className="book-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <input
            type="text"
            value={editAuthor}
            onChange={(e) => setEditAuthor(e.target.value)}
          />
          <button onClick={saveEdit} className='save'>Save</button>
          <button onClick={cancelEdit} className='cancel'>Cancel</button>
        </div>
      ) : (
        <div>
          <span>{book.title} by {book.author}</span>
          <button onClick={() => startEditing(index)} className='edit'>Edit</button>
          <button onClick={() => deleteBook(index)} className='delete'>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BookItem;
