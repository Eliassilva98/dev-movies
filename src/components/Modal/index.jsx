import { useEffect, useState } from 'react'
import { Background, CloseButton, Container } from './styles'
import { getMovieVideos, getSeriesVideos } from '../../services/getData'

function Modal({ id, mediaType, setShowModal }) {
  const [videos, setVideos] = useState()
  useEffect(() => {
    async function loadVideos() {
      if (mediaType === 'movie') {
        setVideos(await getMovieVideos(id))
      } else if (mediaType === 'tv') {
        setVideos(await getSeriesVideos(id))
      }
    }
    loadVideos()
  }, [id, mediaType])

  return (
    <Background onClick={() => setShowModal(false)}>
      {videos ? (
        videos.length > 0 ? (
          <Container>
            <CloseButton>x</CloseButton>
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].key}`}
              title="Youtube Video Player"
              allowFullScreen
            ></iframe>
          </Container>
        ) : (
          <Container>
            <CloseButton>x</CloseButton>
            <p>Nenhum trailer disponível.</p>
          </Container>
        )
      ) : null}
    </Background>
  )
}

export default Modal
