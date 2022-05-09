import { AnyAction } from "redux"
import { BookType } from "../../BookList/BookList"
import { ActionTypesEnum } from "../types"

export type StateType = {
  isLoading: boolean
  books: BookType[]
} | undefined

const reducer = (state: StateType, action: AnyAction) => {
  switch (action.type) {
    case ActionTypesEnum.FETCH_BOOKS_PENDING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ActionTypesEnum.FETCH_BOOKS_SUCCESS: {
      return {
        ...state,
        books: action.books
      }
    }
    default: return state
  }
}

export default reducer
