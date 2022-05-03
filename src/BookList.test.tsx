import React from 'react'
import { render } from '@testing-library/react'

import BookList from './BookList'

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

    const { container } = render(<BookList {...props} />)
    const titles = [...container.querySelectorAll('h2')].map(x => x.innerHTML)

    expect(titles).toEqual(props.books.map(book => book.name))
  })
})
