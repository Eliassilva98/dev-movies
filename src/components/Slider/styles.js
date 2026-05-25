import styled from 'styled-components'

export const Container = styled.div`
  background: #000000;
  padding: 0 20px;

  h2 {
    color: #ffff;
    font-size: 24px;
    margin: 50px 0 20px 20px;
  }

  & .home-swiper .swiper-wrapper {
    display: flex !important;
    gap: 10px !important;
  }

  & .home-swiper .swiper-slide {
    padding: 0 !important;
    margin: 0 !important;
    width: 300px !important;
    display: flex;
    justify-content: center;
  }

  .series-slider .swiper-slide {
    width: 180px !important;
    height: auto !important;
  }

  @media (max-width: 768px) {
    padding: 0 10px;

    h2 {
      font-size: 18px;
      margin: 30px 0 15px 10px;
    }

    & .home-swiper .swiper-wrapper {
      gap: 8px !important;
    }

    & .home-swiper .swiper-slide {
      width: 150px !important;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
