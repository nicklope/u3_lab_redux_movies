import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'

const mapStateToProps = ( state ) => {
  return { movieState : state.movieState.courses || [] }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}
let movies 
const MovieCard = (props) => {
  useEffect(() => {
    props.fetchMovies()
    console.log(props)
 
  }, [])

  return (
    <div>
      {props.movieState.movies.results.map((movie)=>(
    <div id='movie-container' key={movie.id}>

  <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}></img>
  
  <h1>{movie.title}</h1>
  </div>
  )) }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)