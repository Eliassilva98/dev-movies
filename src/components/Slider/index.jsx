import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from './styles'
import Card from '../Card'

function Slider({ info, title, className }) {
  return (
    <Container className={className}>
      <h2>{title}</h2>
      <Swiper
        className="home-swiper"
        grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slider
