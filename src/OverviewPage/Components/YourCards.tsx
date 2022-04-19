import React from "react";
import {Subtitle, Title} from "../../SharedUi/Titles";
import styled from "styled-components";
import JapanCard from "../../Images/Cards/JapanCard.svg"
import AmazingCard from "../../Images/Cards/AmazingCard.svg"
import {DashButton} from "../../SharedUi/Buttons";
import Explained from "../../Images/expand_more_white_24dp.svg"

const YourCard = () =>
{
    return (
        <div style={{display: "flex", flexDirection:'column', gap:'5px'}}>
            <Title>
                Your cards
            </Title>

            <div style={{display:"flex", marginTop:'20px', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex'}}>
                <CardImg style={{height:'44px', width:'auto'}} src={JapanCard}/>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'20px'}}>
                    <p>Debit card #2</p>
                    <p>3123B</p>
                </div>
                </div>
                <img src={Explained} style={{height:'32px', width:'32px'}}/>
            </div>

            <div style={{display:"flex", marginTop:'20px', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex'}}>
                    <CardImg style={{height:'44px', width:'auto'}} src={AmazingCard}/>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'20px'}}>
                        <p>Debit card #2</p>
                        <p>3123B</p>
                    </div>
                </div>
                <img src={Explained} style={{height:'32px', width:'32px'}}/>
            </div>
            <AddCardBtn>+Add card</AddCardBtn>
        </div>
    )
}

const AddCardBtn = styled(DashButton)
`
  width: 100%;
  //height: 45px;
  height: 40px;
  margin-top: 14px;
`

const CardImg = styled.img`
  width: 100%;
  image-rendering: optimizeSpeed;
  pointer-events: none;
`

export default YourCard;