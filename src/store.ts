import { applyMiddleware, compose, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import reducer from "./redux/reducers/reducer"

const initialState = {
  isLoading: false,
  books: [],
}

const middlewares = [thunk]

const composedEnhancers = compose(
  applyMiddleware(...middlewares)
)

const store = createStore(
  reducer,
  initialState,
  composedEnhancers,
)

export default store
