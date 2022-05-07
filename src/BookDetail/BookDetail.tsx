import { useMemo, useState } from "react";
import { BookType } from "../BookList/BookList";

const getDescriptionFor = (book: BookType | null) => {
  return book?.description || book?.name || ''
}

const truncate = (text: string, length = 300,) => {
  return `${text.slice(0, length)}...`
}

const BookDetail = ({ book }: { book: BookType | null }) => {
  const description = useMemo(() => getDescriptionFor(book), [book])
  const isToLong = useMemo(() => description.length > 300, [description.length])

  return (
    <div className='detail'>
      <h2 className='book-title'>{book?.name}</h2>
      <p className='book-description'>{isToLong ? truncate(description) : description}</p>

      <a
        href="#"
        className='show-more'
      >
        Show more
      </a>
    </div>
  )
}

export default BookDetail
