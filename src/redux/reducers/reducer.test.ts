import { ActionTypesEnum } from '../types'
import reducer from './reducer'

describe('Reducer', () => {
  it('Show loading when request is sent', () => {
    // given
    const initialState = { isLoading: false, books: [] }
    const action = { type: ActionTypesEnum.FETCH_BOOKS_PENDING }

    // when
    const state = reducer(initialState, action)

    // then
    expect(state?.isLoading).toBeTruthy()
  })

  it('Add books to state when request successful', () => {
    // given
    const books = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-driven design' },
    ]
    const initialState = { isLoading: false, books: [] }

    const action = {
      type: ActionTypesEnum.FETCH_BOOKS_SUCCESS,
      books,
    }

    // when
    const state = reducer(initialState, action)

    // then
    expect(state?.books).toBe(books)
  })
})
