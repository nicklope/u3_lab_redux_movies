import './styles/App.css'
import MovieDetails from './components/MovieDetails'
import MovieCard from './components/MovieCard'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <h3>Redux Thunk Practice</h3>

      <Routes>
        <Route path="/" element={<MovieCard />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
