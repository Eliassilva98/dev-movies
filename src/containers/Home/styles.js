import styled, { keyframes } from 'styled-components'

const scale = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
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
`

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px;
  margin-top: -30px;

  @media (max-width: 768px) {
    margin-top: 0;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    gap: 30px;
  }
`

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;

    h1 {
      font-size: 2.5rem;
      margin-top: 25px;
    }

    p {
      font-size: 16px;
    }
  }
`

export const Poster = styled.div`
  z-index: 2;
  img {
    width: 400px;
    border-radius: 30px;
    animation: ${scale} 0.5s linear;
  }

  @media (max-width: 768px) {
    img {
      width: 70%;
      max-width: 280px;
    }
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
