import React from "react";
import styled from "styled-components";
import Explained from "../../../Images/expand_more_white_24dp.svg";

const OverviewCard = (props :IOverviewCard) =>
{
    return(
        <div style={{display:"flex", marginTop:'20px', alignItems:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex'}}>
                <CardImg style={{height:'44px', width:'auto'}} src={props.image}/>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'20px'}}>
                    <p style={{whiteSpace:'nowrap'}}>{props.title}</p>
                    <p>{props.balance + 'B'}</p>
                </div>
            </div>
            <img src={Explained} style={{height:'32px', width:'32px'}}/>
        </div>
    )
}

interface IOverviewCard {
    image: string,
    title: string,
    balance: number,
}

const CardImg = styled.img`
  width: 100%;
  image-rendering: optimizeSpeed;
  pointer-events: none;
`

export default OverviewCard;