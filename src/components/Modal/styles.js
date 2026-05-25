import styled from 'styled-components'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: #000;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;

  p {
    color: #fff;
    padding: 20px;
    text-align: center;
    font-size: 1.2rem;
    opacity: 0.85;
    line-height: 1.5;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(6px);
  }

  iframe {
    width: 100%;
    height: 500px;
    border: none;
  }

  @media (max-width: 78px) {
    width: 90%;
    padding: 20px;

    iframe {
      height: 200px;
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  color: #999;
  line-height: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #cccccc;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    top: 5px;
    right: 10px;
  }
`
