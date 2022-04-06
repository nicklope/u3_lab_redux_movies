import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MovieDetailReducer from './reducers/MovieDetailReducer'
import MovieReducer from './reducers/MovieReducer'

const store = createStore(
  combineReducers({
    movieState: MovieReducer,
    movieDetailState: MovieDetailReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
