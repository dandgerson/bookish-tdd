import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import BookList from './BookList'

const renderWithRouter = (component: JSX.Element) => {
  return {
    ...render(
      <MemoryRouter>
        {component}
      </MemoryRouter>
    )
  }
}

describe('Booklist', () => {
  it('loading', () => {
    const props = {
      books: [],
      isLoading: true
    }

    const { container } = render(<BookList {...props} />)
    const content = container.querySelector('p')
    expect(content?.innerHTML).toContain('Loading')
  })

  it('error', () => {
    const props = {
      books: [],
      isError: true,
    }

    const { container } = render(<BookList {...props} />)
    const content = container.querySelector('p')
    expect(content?.innerHTML).toContain('Error')
  })

  it('render books', () => {
    const props = {
      books: [
        { 'name': 'Refactoring', id: 1 },
        { 'name': 'Domain-driven design', id: 2 },
      ]
    }

    const { container } = renderWithRouter(<BookList {...props} />)
    const titles = [...container.querySelectorAll('h2')].map(x => x.innerHTML)

    expect(titles).toEqual(props.books.map(book => book.name))
  })
})
