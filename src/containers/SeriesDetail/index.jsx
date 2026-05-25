import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTrendingSeries } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import {
  Container,
  PageTitle,
  Grid,
  Card,
  Poster,
  Title,
  Rating,
  DetailButton
} from './styles'

function SeriesDetail() {
  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTrendingSeries = async () => {
      try {
        const data = await getTrendingSeries()
        setSeries(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchTrendingSeries()
  }, [])

  if (loading)
    return (
      <Container>
        <p>Carregando...</p>
      </Container>
    )

  return (
    <Container>
      <PageTitle>Séries em alta</PageTitle>
      <Grid>
        {series.map((serie) => (
          <Card key={serie.id}>
            <Poster src={getImages(serie.poster_path)} alt={serie.name} />
            <Title>{serie.name}</Title>
            <Rating>Nota: {serie.vote_average}</Rating>
            <Link to={`/series/${serie.id}`}></Link>
            <DetailButton>Ver Detalhes</DetailButton>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

export default SeriesDetail
