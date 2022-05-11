import { AnyAction, applyMiddleware, compose, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import reducer, { StateType } from "./redux/reducers/reducer"

const initialState = {
  isLoading: false,
  books: [],
}

const middlewares = [thunk]

const composedEnhancers = compose(
  applyMiddleware(...middlewares)
)

const store = createStore<StateType, AnyAction, any, any>(
  reducer,
  initialState,
  composedEnhancers,
)

export default store
