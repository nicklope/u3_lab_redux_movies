import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'
import { useNavigate, useParams } from 'react-router-dom'

const mapStateToProps = ( movies) => {
  return { movies }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const MovieCard = (props) => {
  
  let navigate = useNavigate()


  useEffect(() => {
    props.fetchMovies()
    console.log(props)
 
  }, [])

  return (
    <div>
      {props.movies.movieState.movies.map((movie)=>(
    <div id='movie-container' key={movie.id}>

  <img 
  onClick={() => navigate(`/details/${movie.id}`)}
  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}></img>
  
  <h1>{movie.title}</h1>
  </div>
  )) }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)