import React from "react";
import {Title} from "../../../SharedUi/Titles";
import styled from "styled-components";
import JapanCard from "../../../Images/Cards/JapanCard.svg"
import AmazingCard from "../../../Images/Cards/AmazingCard.svg"
import {DashButton} from "../../../SharedUi/Buttons";
import OverviewCard from "./OverviewCard";

const YourCardsBlock = () =>
{
    return (
        <div style={{display: "flex", flexDirection:'column', gap:'5px'}}>
            <Title>
                Your cards
            </Title>
            <OverviewCard balance={3124} image={JapanCard} title={'Debit card #1'}/>
            <OverviewCard balance={3124} image={AmazingCard} title={'Amazing Card'}/>
            <AddCardBtn>+Add card</AddCardBtn>
        </div>
    )
}





const AddCardBtn = styled(DashButton)
`
  width: 100%;
  height: 40px;
  margin-top: 14px;
`


export default YourCardsBlock;