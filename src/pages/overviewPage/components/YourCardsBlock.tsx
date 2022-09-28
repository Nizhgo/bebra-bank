import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import AmazingCard from "../../../assets/images/Cards/AmazingCard.svg"
import JapanCard from "../../../assets/images/Cards/JapanCard.svg"
import {DashButton} from "../../../components/Buttons";
import {Title} from "../../../components/Titles";
import OverviewCard from "./OverviewCard";

const YourCardsBlock = () => {
    return (
        <div style={{display: "flex", flexDirection: 'column', gap: '5px', marginTop: '1.489em'}}>
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
