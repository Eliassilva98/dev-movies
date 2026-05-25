import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import {
  Background,
  Container,
  SwiperWrapper,
  MovieCard,
  Poster,
  Title,
  Overview,
  Rating,
  HeaderText
} from './styles'
import { getSeriesAtualizadas } from '../../services/getData'
import { getImages } from '../../utils/getImages'

function MovieDetail() {
  const [movie, setMovies] = useState([])

  useEffect(() => {
    async function loadMovies() {
      const data = await getSeriesAtualizadas()
      setMovies(data)
    }
    loadMovies()
  }, [])
  return (
    <>
      {movie && (
        <Background>
          <Container>
            <SwiperWrapper>
              <HeaderText>
                Filmes em destaque no momento — aproveite o melhor do cinema.
              </HeaderText>
              <Swiper
                className="md-swiper"
                modules={[Pagination]}
                spaceBetween={4}
                slidesPerView={1.25}
                centeredSlides={true}
                pagination={{ type: 'progressbar' }}
                breakpoints={{
                  768: {
                    slidesPerView: 1.45,
                    spaceBetween: 6
                  }
                }}
              >
                {movie.map((movie, index) => (
                  <SwiperSlide key={index}>
                    <MovieCard>
                      <Poster
                        src={getImages(movie.poster_path)}
                        alt="capa-do-filme"
                      />
                      <Title>{movie.name}</Title>
                      <Overview>{movie.overview}</Overview>
                      <Rating>
                        {movie.vote_average
                          ? movie.vote_average.toFixed(1)
                          : 'Sem Nota'}
                      </Rating>
                    </MovieCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperWrapper>
          </Container>
        </Background>
      )}
    </>
  )
}

export default MovieDetail
