import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
  }
`

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin: 70px 0 20px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 0 0 12px rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 100px 0 15px 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 30px 0 10px 0;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`

export const Card = styled.div`
  background: #0f0f0f;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`

export const Poster = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

export const Title = styled.h3`
  font-size: 1.3rem;
  margin: 10px;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 8px;
  }
`

export const Rating = styled.div`
  margin: 5px 10px;
  font-size: 0.9rem;
  color: #ff0000;

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin: 4px 8px;
  }
`

export const DetailButton = styled.button`
  display: block;
  width: calc(100% - 20px);
  margin: 10px;
  padding: 8px;
  background: #e50914;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 7px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin: 8px;
    padding: 6px;
  }
`
