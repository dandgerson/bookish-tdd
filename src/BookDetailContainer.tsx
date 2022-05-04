import { useParams } from "react-router-dom"
import BookDetail from "./BookDetail"
import { BookType } from "./BookList"
import useRemoteService from "./hooks/useRemoteService"

const BookDetailContainer = () => {
  const { id } = useParams()
  const { data: book } = useRemoteService<BookType | null>(`http://localhost:8080/books/${id}`, null)

  return (
    <BookDetail book={book} />
  )
}

export default BookDetailContainer
