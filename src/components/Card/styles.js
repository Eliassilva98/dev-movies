import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    border-radius: 30px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 2 / 3;
  }

  h3 {
    color: #fff;
    margin-top: 15px;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.3;
    min-height: 36px;
  }

  @media (max-width: 768px) {
    img {
      width: 150px;
      border-radius: 20px;
    }

    h3 {
      font-size: 14px;
      text-align: center;
      margin-top: 8px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`
