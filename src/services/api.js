import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '93cb73ac334e4ea0b16ac735b0b59acc',
    language: 'pt-BR',
    page: 1
  }
})

export default api
