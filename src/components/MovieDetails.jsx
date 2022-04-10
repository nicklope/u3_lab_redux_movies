import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovieDetails } from '../store/actions/MovieActions'
import { useNavigate, useParams } from 'react-router-dom'

const mapStateToProps = ( details) => {
  return { details }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {

  const {id} = useParams()
  useEffect(()=>{
    props.fetchMovieDetails(id)
    console.log(props)
  },[id])
  
  return (
  <div>
  <h1>{props.details.movieDetailState.movieDetails.title}</h1>
  <img src={`https://image.tmdb.org/t/p/w300/${props.details.movieDetailState.movieDetails.poster_path}`}/>
  <h2>{props.details.movieDetailState.movieDetails.overview}</h2>
  </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)