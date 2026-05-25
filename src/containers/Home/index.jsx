import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getNowPlaying,
  getPeopleList,
  getTopMovies
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topNowPlaying, setTopNowPlaying] = useState()
  const [topPeopleList, setTopPeopleList] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getNowPlaying(),
        getPeopleList()
      ])
        .then(([movie, TopMovies, TopNowPlaying, TopPeopleList]) => {
          setMovie(movie)
          setTopMovies(TopMovies)
          setTopNowPlaying(TopNowPlaying)
          setTopPeopleList(TopPeopleList)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal
              id={movie.id}
              mediaType="movie"
              setShowModal={setShowModal}
            />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topNowPlaying && <Slider info={topNowPlaying} title={'Tocando Agora'} />}
      {topPeopleList && <Slider info={topPeopleList} title={'Top Artistas'} />}
    </>
  )
}

export default Home
