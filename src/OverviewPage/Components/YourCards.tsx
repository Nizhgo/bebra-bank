import React from "react";
import {Subtitle, Title} from "../../SharedUi/Titles";
import styled from "styled-components";
import JapanCard from "../../Images/Cards/JapanCard.svg"
import AmazingCard from "../../Images/Cards/AmazingCard.svg"
import {DashButton} from "../../SharedUi/Buttons";

const YourCard = () =>
{
    return(
        <YourCardContainer>
            <Title>
                Your cards
            </Title>
            <Subtitle>
                Click to see banking details
            </Subtitle>
            <YourCardContainer>
                <CardImgWrapper>
                    <CardImg src={JapanCard}/>
                </CardImgWrapper>

                <AddCardBtn>+Add card</AddCardBtn>
            </YourCardContainer>
        </YourCardContainer>
    )
}

const AddCardBtn = styled(DashButton)
`
  width: 100%;
  height: 45px;
  margin-top: 14px;
`

const YourCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    //width: 350px;
`

const CardImgWrapper = styled.div`
  margin-top: 20px;
`

const CardImg = styled.img`
  width: 100%;
  image-rendering: optimizeSpeed;
  pointer-events: none;
`

export default YourCard;