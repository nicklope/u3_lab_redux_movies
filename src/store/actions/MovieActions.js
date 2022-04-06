import { GetMovies, GetMovieDetails } from '../../services/MovieServices'
import { GET_MOVIES, GET_MOVIE } from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()
      dispatch({
        type: GET_MOVIES,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}
export const LoadMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const movieDetails = await GetMovieDetails(id)

      dispatch({
        type: GET_MOVIE,
        payload: movieDetails
      })
    } catch (error) {
      throw error
    }
  }
}
