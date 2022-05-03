import useRemoteService from "./hooks/useRemoteService"
import BookList, { BookType } from "./BookList"

const BookListContainer = () => {
  const { data: books, isLoading, isError } = useRemoteService<BookType[]>('http://localhost:8080/books', [])

  return <BookList
    books={books}
    isLoading={isLoading}
    isError={isError}
  />
}

export default BookListContainer
