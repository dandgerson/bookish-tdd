import { BookType } from "./BookList";

const BookDetail = ({ book }: { book: BookType | null }) => {
  return (
    <div className='detail'>
      <h2 className='book-title'>{book?.name}</h2>
    </div>
  )
}

export default BookDetail
