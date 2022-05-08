import axios from "axios"
import { AnyAction } from "redux"
import { Dispatch } from "redux"
import { c } from "../../constants"
import { ActionTypesEnum } from "../types"

export const setSearchTerm = (term: string): AnyAction => ({
  type: ActionTypesEnum.SET_SEARCH_TERM,
  term
})

// TODO: drop any
export const fetchBooks = (term: string): any => (dispatch: Dispatch<AnyAction>): Promise<void> => {
  dispatch({
    type: ActionTypesEnum.FETCH_BOOKS_PENDING,
  })

  return axios
    .get(`${c.serverBaseUrl}/books?q=${term}`)
    .then((res) => {
      dispatch({
        type: ActionTypesEnum.FETCH_BOOKS_SUCCESS,
        books: res.data,
      })
    })
    .catch(err => {
      dispatch({
        type: ActionTypesEnum.FETCH_BOOKS_FAILED,
        err: err.message,
      })
    })
}
