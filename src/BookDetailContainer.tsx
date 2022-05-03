import { useParams } from "react-router-dom"
import { BookType } from "./BookList"
import useRemoteService from "./hooks/useRemoteService"

const BookDetailContainer = () => {
  const { id } = useParams()
  const { data: book } = useRemoteService<BookType | null>(`http://localhost:8080/books/${id}`, null)

  return (
    <div className='detail'>
      <h2 className='book-title'>{book?.name}</h2>
    </div>
  )
}

export default BookDetailContainer
