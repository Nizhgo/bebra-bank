import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import BodyContainer from "../../SharedUi/BodyContainer";
import {FilledButton} from "../../SharedUi/Buttons";
import OlegT from "../../Images/oleg-tinkov.png"
import BrawlS from "../../Images/BrawlS.png"
import Ryan from "../../Images/Ryan.png"
import Trump from "../../Images/Trump.png"
import AccountBoxImg from "../../Images/BoxImage1.png"
import LandingCard from "../../Images/LandingCard.png";
import ItsEasyImg from "../../Images/ItsEasyBox.png"
import LandingCardContainerBackground from "../../Images/LandingCardContainerBackground.png"
import LandingBox from "./LandingBox";

const Landing = () =>
{
    return(
        <BodyContainer style={{textAlign:'center'}}>
            <LandingHeader>
                Пожалуй, лучший бебра банк<br/><b>в мире</b>*
            </LandingHeader>
            <div style={{height: '20px'}}/>
            <div style={{display: 'flex', flexDirection:'column', gap: '0.2em', color: 'gray'}}>
                <p>Work in progress</p>
                <p>Регистрация будет открыта позднее</p>
            </div>
            <CardImgWrapper>
                <div style={{height: '120px'}}/>
                <LandingCardImg src={LandingCard}/>
            </CardImgWrapper>
            <div style={{height: '120px'}}/>
            <BoxContainer>
                <LandingBox title={'Комиссия на SWIFT 100% + 30₽'} image={OlegT} linkTitle={'Ого, выговно'} link={'#'}/>
                <LandingBox title={'140 мегаящиков каждому новому пользователю'} image={BrawlS} linkTitle={'Получить'} link={'#'}/>
                <LandingBox title={'Для самых крутых парней'} image={Ryan} linkTitle={'Я такой'} link={'#'}/>
                <LandingBox title={'Инвестиции это просто'} image={ItsEasyImg} linkTitle={'К слот машине'} link={'#'}/>
            </BoxContainer>
        </BodyContainer>
    )
}
const LandingHeader = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  text-align: center;
  line-height: 42px;

  b {
    color: #6b4dcb;
    font-weight: 700;
  }
`
const BoxContainer = styled.div`;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 30px;
    grid-column-gap: 40px;
  
  @media (max-width: 600px)
  {
    grid: none;
    display: flex;
    flex-direction: column;
  }
`

const CardImgWrapper = styled.div`
  background-image: url(${LandingCardContainerBackground});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  text-align: start;
  
  @media (max-width: 512px)
  {
    text-align: center;
  }

`
const LandingCardImg = styled.img`
  max-width: 671px;
  max-height: 403px;
  transform: rotate(-3.25deg);
  transition: all 0.8s ease 0s;
  @media(max-width: 671px)
  {
    width: 86vw;
  }
  :hover{
    transform: rotate(-4.25deg);
  }
`
export default Landing;
