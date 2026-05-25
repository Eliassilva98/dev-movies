import styled from 'styled-components'

export const Background = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(
    135deg,
    #0f0f0f 0%,
    #1b1b1b 50%,
    #0c0c0c 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0;
`

export const SwiperWrapper = styled.div`
  width: 100%;
  padding: 20px 0;

  & .md-swiper .swiper-wrapper {
    display: flex !important;
    gap: 10px !important;
  }

  & .md-swiper .swiper-slide {
    padding: 0 !important;
    margin: 0 !important;
    width: auto !important;
    display: flex;
    justify-content: center;
  }

  & .md-swiper .swiper-pagination-progressbar {
    background: rgba(255, 255, 255, 0.25);
    height: 4px;
    border-radius: 4px;
  }

  & .md-swiper .swiper-pagination-progressbar-fill {
    background: #ff0055;
  }
`

export const HeaderText = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 20px 0 15px;
  }
`

export const MovieCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(6px);
  border-radius: 18px;
  padding: 20px;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 400px;
    padding: 15px;
  }
`

export const Poster = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  ${MovieCard}:hover & {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    height: 260px;
  }
`

export const Title = styled.h3`
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 8px;
  text-align: center;

  line-height: 1.2;
  height: calc(1.2em * 2);

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Overview = styled.p`
  color: #bdbdbd;
  font-size: 0.9rem;
  line-height: 1.3;

  height: calc(1.3em * 4);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const Rating = styled.div`
  margin-top: auto;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffcc00;
`
