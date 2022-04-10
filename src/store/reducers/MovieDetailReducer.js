import { GET_MOVIE } from '../types'

const initialState = {
  movieDetails: []
}

const MovieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, movieDetails: action.payload }
    default:
      return { ...state }
  }
}

export default MovieDetailReducer
