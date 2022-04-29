import React from "react";
import {Title} from "../../../SharedUi/Titles";
import styled from "styled-components";
import JapanCard from "../../../Images/Cards/JapanCard.svg"
import AmazingCard from "../../../Images/Cards/AmazingCard.svg"
import {DashButton} from "../../../SharedUi/Buttons";
import OverviewCard from "./OverviewCard";
import {Link} from "react-router-dom";

const YourCardsBlock = () =>
{
    return (
        <div style={{display: "flex", flexDirection:'column', gap:'5px', marginTop:'1.489em'}}>
            <Title>
                Your cards
            </Title>
            <OverviewCard balance={3124} image={JapanCard} title={'Debit card #1'}/>
            <OverviewCard balance={3124} image={AmazingCard} title={'Amazing Card'}/>
            <Link to={'/add-card'}>
            <AddCardBtn>+Add card</AddCardBtn>
            </Link>
        </div>
    )
}





const AddCardBtn = styled(DashButton)
`
  width: 100%;
  height: 40px;
  margin-top: 2em;
`


export default YourCardsBlock;