import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MovieReducer from './reducers/MovieReducer'

const store = createStore(
  combineReducers({
    movieState: MovieReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
