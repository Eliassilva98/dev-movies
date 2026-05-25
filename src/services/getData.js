import api from './api'

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[0]
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function getNowPlaying() {
  const {
    data: { results }
  } = await api.get('/movie/now_playing')

  return results
}

export async function getPeopleList() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

export async function getMovieVideos(id) {
  const {
    data: { results }
  } = await api.get(`/movie/${id}/videos`)

  return results || []
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast }
  } = await api.get(`/movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`)

  return results
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`)

  return data
}

export async function getMovieUpcoming() {
  const {
    data: { results }
  } = await api.get('/movie/upcoming')

  return results[0]
}

export async function getMovieDiscover() {
  const {
    data: { results }
  } = await api.get('/discover/movie')

  return results
}

export async function getMovieDiscoverTV() {
  const {
    data: { results }
  } = await api.get('/discover/tv')

  return results
}

export async function getSeriesAtualizadas() {
  const {
    data: { results: changes }
  } = await api.get('/tv/changes')

  const ids = changes.slice(0, 60).map(({ id }) => id)

  const seriesResponses = await Promise.allSettled(
    ids.map((id) => api.get(`/tv/${id}`))
  )

  return seriesResponses
    .filter((res) => res.status === 'fulfilled')
    .map((res) => ({
      poster_path: res.value.data.poster_path,
      name: res.value.data.name,
      overview: res.value.data.overview,
      vote_average: res.value.data.vote_average,
      backdrop_path: res.value.data.backdrop_path
    }))
}

export async function getSeriesAiringToday() {
  const {
    data: { results }
  } = await api.get('/tv/airing_today')

  return results
}

export async function getSeriesVideos(id) {
  const { data } = await api.get(`/tv/${id}/videos`)
  return data.results
}

export async function getSeriesOnTheAir() {
  const {
    data: { results }
  } = await api.get('/tv/on_the_air')

  return results || []
}

export async function getTrendingSeries() {
  const {
    data: { results }
  } = await api.get('/trending/tv/week')
  return results
}
