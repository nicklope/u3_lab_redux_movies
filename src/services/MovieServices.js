import Client from './'
const API_KEY = process.env.REACT_APP_API_KEY

export const GetMovies = async () => {
  try {
    const res = await Client.get(
      `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    )
    return res.data
  } catch (error) {
    throw error
  }
}

// export const GetMovieDetails = async (movieId) => {
//   try {
//     const res = await Client.get(
//       `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
//     )
//     return res.data.Products
//   } catch (error) {
//     throw error
//   }
// }
