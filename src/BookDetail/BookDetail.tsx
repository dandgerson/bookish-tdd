import { BookType } from "../BookList/BookList";

const BookDetail = ({ book }: { book: BookType | null }) => {
  return (
    <div className='detail'>
      <h2 className='book-title'>{book?.name}</h2>
      <p className='book-description'>{book?.description}</p>
    </div>
  )
}

export default BookDetail
