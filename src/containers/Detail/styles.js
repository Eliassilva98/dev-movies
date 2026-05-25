import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from {
    transform: scale(0)
    }

    to {
    transform: scale(1)
    }
`

export const Background = styled.div`
  background-image: url(${(props) => props.$image});
  height: 50vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }

  @media (max-width: 768px) {
    height: 30vh;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    padding: 0 1rem;
    gap: 1rem;
  }
`

export const Cover = styled.div`
  /* flex: 0 0 30%; */
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 400px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }

  @media (max-width: 768px) {
    img {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 70%;
      max-width: 280px;
    }
  }
`

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #ffff;
  }

  p {
    font-weight: 700;
    color: #ffff;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left !important;
    align-items: flex-start !important;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    padding: 20px 0;
  }

  h4 {
    color: #ffff;
    font-size: 20px;
    font-weight: 700;
    margim-bottom: 20px;
  }

  iframe {
    border: none;
  }

  @media (max-width: 768px) {
    .kPURgI {
      align-itens: flex-start;
      padding: 0 1rem;
      text-align: left !important;
    }

    div {
      width: 100%;
      align-items: flex-start;
      padding: 10px 0;
    }

    h4 {
      display: block;
      text-align: left !important;
      width: 100%;
      margin-left: 0;
      font-size: 18px;
    }

    iframe {
      width: 100%;
      height: 200px;
    }
  }
`
