import React from "react";
import styled from "styled-components";
import BlackCard from "../Images/Cards/BlackCard.svg";
import WhiteCard from "../Images/Cards/WhiteCard.svg";
import AmazingCard from "../Images/Cards/AmazingCard.svg";
import PaintCard from "../Images/Cards/PaintCard.svg";
import MalevichCard from "../Images/Cards/MalevichCard.svg";
import JapanCard from "../Images/Cards/JapanCard.svg";
import DigitalCard from "../Images/Cards/BlueDigital.svg";
import FrogCard from "../Images/Cards/FrogCard.svg";


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