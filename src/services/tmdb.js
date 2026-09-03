const BASE_URL = 'https://api.themoviedb.org/3'
const TOKEN = import.meta.env.VITE_TMDB_TOKEN


// // movie
// export async function getTrendingMovies() {
//   const response = await fetch(
//     `${BASE_URL}/trending/movie/week?language=en-US`,
//     {
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${TOKEN}`
//       }
//     }
//   )

//   if (!response.ok) {
//     throw new Error('Failed to fetch trending movies')
//   }

//   return await response.json()
// }


// // tv
// export async function getTrendingTV() {
//   const response = await fetch(`${BASE_URL}/trending/tv/week?language=en-US`,
//   {
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${TOKEN}`
//       }
//     }
//   )
//   if(!response.ok){
//     throw new Error('Failed to fetch trending TV shows');
//   }
//   return await response.json()

// }


export async function getData(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  }
  )
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return await response.json()

}
// movie
export function getTrendingMovies() {
  return getData('/trending/movie/week?language=en-US')
}
// TV s
export function getTrendingTV() {
  return getData('/trending/tv/week?language=en-US')
}
// pular Movie
export function getPopularMovies(page = 1) {
  return getData(`/movie/popular?language=en-US&page=${page}`)
}
// popular TV
export function getPopularTV(page = 1) {
  return getData(`/tv/popular?language=en-US&page=${page}`)
}
// Anime
export function getPopularAnime(page = 1) {
  return getData(
    `/discover/tv?with_genres=16&with_original_language=ja&sort_by=popularity.desc&page=${page}`
  )
}
export function getDetails(type, id) {
  return getData(`/${type}/${id}?language=en-US`)
}
export function searchMedia(query) {
  return getData(
    `/search/multi?query=${encodeURIComponent(query)}&language=en-US&page=1`
  )
}