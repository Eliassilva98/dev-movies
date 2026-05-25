import { getImages } from '../../utils/getImages'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getMovieUpcoming,
  getMovieDiscover,
  getMovieDiscoverTV
} from '../../services/getData'
import { Background, ButtonContainer, Container, Info, Poster } from './styles'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'

function Movies() {
  const [showModal, setShowModal] = useState(false)
  const [movieUpcoming, setMovieUpcoming] = useState()
  const [movieDiscover, setMovieDiscover] = useState()
  const [movieDiscoverTV, setMovieDiscoverTV] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    async function getMovie() {
      const data = await getMovieUpcoming()
      const discover = await getMovieDiscover()
      const discoverTv = await getMovieDiscoverTV()
      setMovieUpcoming(data)
      setMovieDiscover(discover)
      setMovieDiscoverTV(discoverTv)
    }
    getMovie()
  }, [])
  return (
    <>
      {movieUpcoming && (
        <Background $image={getImages(movieUpcoming.backdrop_path)}>
          {showModal && (
            <Modal
              id={movieUpcoming.id}
              mediaType="movie"
              setShowModal={setShowModal}
            />
          )}
          <Container>
            <Info>
              <h1>{movieUpcoming.title}</h1>
              <p>{movieUpcoming.overview}</p>
              <ButtonContainer>
                <Button
                  red
                  onClick={() => navigate(`/movieDetail/${movieUpcoming.id}`)}
                >
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assita o Trailer
                </Button>
              </ButtonContainer>
            </Info>
            <Poster>
              <img src={getImages(movieUpcoming.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {movieDiscover && (
        <Slider info={movieDiscover} title={'Descobrir Filmes'} />
      )}

      {movieDiscoverTV && (
        <Slider info={movieDiscoverTV} title={'Descobrir na TV'} />
      )}
    </>
  )
}

export default Movies
