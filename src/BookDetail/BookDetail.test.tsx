import { render } from "@testing-library/react"
import BookDetail from "./BookDetail"

describe('BookDetail', () => {
  const book = {
    name: 'Refactoring',
    id: 1,
    description: "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software."
  }

  it('renders title', () => {
    const props = {
      book
    }

    const { container } = render(<BookDetail {...props} />)

    const title = container.querySelector('.book-title')
    expect(title?.innerHTML).toEqual(props.book.name)
  })

  it('renders description', () => {
    const props = {
      book
    }

    const { container } = render(<BookDetail {...props} />)

    const description = container.querySelector('p.book-description')
    expect(description?.innerHTML).toEqual(props.book.description)
  })
})
