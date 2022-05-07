import { ChangeEventHandler, useEffect, useState } from "react"
import useRemoteService from "../hooks/useRemoteService"
import BookList, { BookType } from "./BookList"
import { c } from '../constants'
import SearchBox from "./SearchBox"

const BookListContainer = () => {
  const { data: books, isLoading, isError, setUrl } = useRemoteService<BookType[]>('http://localhost:8080/books', [])
  const [term, setTerm] = useState('')

  useEffect(() => {
    setUrl(`${c.serverBaseUrl}/books?q=${term}`)
  }, [setUrl, term])

  const onSearch: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => setTerm(e.target.value)

  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />

      <BookList
        books={books}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  )
}

export default BookListContainer
