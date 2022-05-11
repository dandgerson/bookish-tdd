import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import { setSearchTerm, fetchBooks } from './actions'
import axios from 'axios'
import { c } from '../../constants'
import { ActionTypesEnum } from '../types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('BookListContainer related actions', () => {
  it('Sets the search keyword', () => {
    const term = ''
    const expected = {
      type: ActionTypesEnum.SET_SEARCH_TERM,
      term,
    }
    const action = setSearchTerm(term)
    expect(action).toEqual(expected)
  })

  it('Fetches data successfully', () => {
    const books = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-driven design' },
    ]

    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }))

    const expectedActions = [
      { type: ActionTypesEnum.FETCH_BOOKS_PENDING },
      { type: ActionTypesEnum.FETCH_BOOKS_SUCCESS, books }
    ]

    const store = mockStore({ books: [] })


    return store.dispatch(fetchBooks('')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('Fetched data failure', () => {
    // given
    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.reject({ message: 'Something went wrong' }))

    const expectedActions = [
      { type: ActionTypesEnum.FETCH_BOOKS_PENDING },
      {
        type: ActionTypesEnum.FETCH_BOOKS_FAILED,
        err: 'Something went wrong'
      }
    ]

    const store = mockStore({ books: [] })

    // when
    return store.dispatch(fetchBooks('')).then(() => {
      // then
      expect(store.getActions()).toEqual(expectedActions)
    })

  })

  it('Search data with term', () => {
    // given
    const books = [
      { id: 1, name: 'Refactoring' },
      { id: 2, name: 'Domain-driven design' }
    ]
    axios.get = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: books }))

    const store = mockStore({ books: [] })

    // when
    return store.dispatch(fetchBooks('domain')).then(() => {
      // then
      expect(axios.get).toHaveBeenCalledWith(`${c.serverBaseUrl}/books?q=domain`)
    })
  })

})
