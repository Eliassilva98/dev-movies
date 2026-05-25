import { useNavigate } from 'react-router-dom'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import { getImages } from '../../utils/getImages'
import { useEffect, useState } from 'react'
import { getSeriesAiringToday, getSeriesOnTheAir } from '../../services/getData'
import { Background, Container, Info, ContainerButtons, Poster } from './styles'

function Series() {
  const [seriesAiringToday, setSeriesAiringToday] = useState()
  const [seriesOnTheAir, setSeriesOnTheAir] = useState()
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function seriesShownToday() {
      const data = await getSeriesAiringToday()
      const dataOnTheAir = await getSeriesOnTheAir()
      setSeriesAiringToday(data)
      setSeriesOnTheAir(dataOnTheAir)
    }
    seriesShownToday()
  }, [])
  return (
    <>
      {seriesAiringToday && (
        <Background $image={getImages(seriesAiringToday[0].backdrop_path)}>
          {showModal && (
            <Modal
              id={seriesAiringToday[0].id}
              mediaType="tv"
              setShowModal={setShowModal}
            />
          )}
          <Container>
            <Info>
              <h1>{seriesAiringToday[0].name}</h1>
              <p>{seriesAiringToday[0].overview}</p>
              <ContainerButtons>
                <Button
                  red
                  onClick={() =>
                    navigate(`/seriesDetail/${seriesAiringToday[0].id}`)
                  }
                >
                  Assista agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(seriesAiringToday[0].poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {seriesAiringToday && (
        <Slider
          info={seriesAiringToday}
          title={'Séries exibidas hoje'}
          className="series-slider"
        />
      )}

      {seriesOnTheAir && (
        <Slider
          info={seriesOnTheAir}
          title={'Séries de Tv no ar'}
          className="series-slider"
        />
      )}
    </>
  )
}

export default Series
