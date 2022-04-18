import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import BodyContainer from "../SharedUi/BodyContainer";
import {FilledButton} from "../SharedUi/Buttons";
import LandingCard from "../Images/LandingCard.png"
import AccountBoxImg from "../Images/BoxImage1.png"
import ItsEasyImg from "../Images/ItsEasyBox.png"
import LandingCardContainerBackground from "../Images/LandingCardContainerBackground.png"
import LandingBox from "./LandingBox";

const Landing = () =>
{
    return(
        <BodyContainer style={{textAlign:'center'}}>
            <LandingHeader>
                The best bank for bebra <br/><b>in the world</b>*
            </LandingHeader>
            <div style={{height: '20px'}}/>
            <Link to={'/signup'}>
                <FilledButton>Get a free account</FilledButton>
            </Link>
            <CardImgWrapper>
                <div style={{height: '120px'}}/>
                <LandingCardImg src={LandingCard}/>
            </CardImgWrapper>
            <div style={{height: '120px'}}/>
            <BoxContainer>
                <LandingBox title={'Link all your accounts in one place'} image={AccountBoxImg} linkTitle={'Open Banking'} link={'#'}/>
                <LandingBox title={'Investing is easy! Start even with 1 bebra'} image={ItsEasyImg} linkTitle={'Open Banking'} link={'#'}/>
            </BoxContainer>
            <div style={{height: '100px'}}/>
            <hr/>
            <p style={{textAlign:'right'}}>Aleksey Nizhgorodov</p>
            <div style={{height: '30px'}}/>
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
    font-weight: 800;
  }
`
const BoxContainer = styled.div`
  margin-inline: 14px;
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
