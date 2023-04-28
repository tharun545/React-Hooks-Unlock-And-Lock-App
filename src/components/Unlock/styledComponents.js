// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background: linear-gradient(to bottom, #0b0c1e, #3c2940);
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LockImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`

export const Heading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: normal;
  margin-bottom: 50px;
`

export const Button = styled.button`
  border-radius: 10px;
  height: 40px;
  width: 80px;
  border: 0;
  background-color: #06b6d4;
  color: #ffffff;
  margin-top: 30px;
`
