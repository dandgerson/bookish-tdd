type BookType = {
  name: string
  id: number
}

const BookList = ({ books, isLoading, isError }: {
  books: BookType[]
  isLoading?: boolean
  isError?: boolean
}) => {

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error...</p>
  }

  return (
    <div data-test='book-list'>
      {books.map(book => (
        <div key={book.id} className='book-item'>
          <h2 className='title'>{book.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default BookList