import React from "react";
import styled from "styled-components";
import AmazingCard from "../assets/images/Cards/AmazingCard.svg";
import BlackCard from "../assets/images/Cards/BlackCard.svg";
import DigitalCard from "../assets/images/Cards/BlueDigital.svg";
import FrogCard from "../assets/images/Cards/FrogCard.svg";
import JapanCard from "../assets/images/Cards/JapanCard.svg";
import MalevichCard from "../assets/images/Cards/MalevichCard.svg";
import PaintCard from "../assets/images/Cards/PaintCard.svg";
import WhiteCard from "../assets/images/Cards/WhiteCard.svg";


const Cards: string[] = [
    BlackCard,
    WhiteCard,
    AmazingCard,
    PaintCard,
    MalevichCard,
    JapanCard,
    DigitalCard,
    FrogCard,
]

interface ICardSelection{
    selectedCard: any,
    setSelectedCard: any;
}

const CardSelection = (props: ICardSelection) => {
    const {selectedCard, setSelectedCard} = props;
  return(
      <CardsWrapper>
          {Cards.map((card) => {
              return (
                  <CardImgWrapper onClick={() => setSelectedCard(card)} key={card}>
                      <CardImg src={card} isSelected={selectedCard === card}/>
                  </CardImgWrapper>
              )
          })}
      </CardsWrapper>
  )
}
interface ISelectedProps {
    isSelected?: boolean
}

const CardImg = styled.img<ISelectedProps>`
  transition: 0.1s;
  width: 205px;
  height: 123px;
  image-rendering: optimizeSpeed;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-bottom: ${p => p.isSelected === true? '5px solid #5257D3': 'none'};
  pointer-events: none;
  
  
  :focus{
    border-width: 100px;
    border-color: darkred;
  }
`

const CardsWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    height: auto;
    align-items: center;
    overflow-y: unset;
  @media(max-width: 512px)
  {
    margin-inline: -1.314em;
    width: 100vw;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-behavior: auto;
  }
    
`

const CardImgWrapper = styled.div`
  :hover
  {
    scale: 1.05;
  }
`

export default CardSelection;
