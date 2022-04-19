import styled from "styled-components";

const MainTitle = styled.h2`
  margin-top: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #FFFFFF;
    `

const Title = styled(MainTitle)`
font-size: 26px;
  //margin-top: 30px;
`

const Subtitle = styled.h6`
  font-family: 'Space Grotesk',monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;

  color: #A6A6A6;
    `

export {MainTitle, Title, Subtitle};