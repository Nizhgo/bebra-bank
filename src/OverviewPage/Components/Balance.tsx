import React from "react";
import styled from "styled-components";
import {FilledButton} from "../../SharedUi/Buttons";

const Balance = () =>
{
    return(
    <BalanceContainer>
        <Sad123>Balance:</Sad123>
        <GreenText>B 3124.4</GreenText>
        <div style={{display: 'flex', justifyContent:'start', gap: '1em', marginTop:'1em'}}>
            <BlackButton>Pay</BlackButton>
            <BlackButton>Deposit</BlackButton>
        </div>
    </BalanceContainer>
    )
}

const BalanceContainer = styled.div`
  grid-column-start: 1;
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  //width: 349px;
  background: #121212;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 20px;
  `

const   BlackButton = styled(FilledButton)`
background: black;
  max-width: 130px;
  font-size: 14px;
  min-width: 4em;
  :hover{
    background: black;
  }
`


const Sad123 = styled.p`
  margin-top: 15px;
  font-family: 'Space Grotesk', monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #FFFFFF;
`

const GreenText = styled.p`
  margin-top: 8px;
  font-family: 'Space Grotesk', monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  color: #BFFD7D;

`

export default Balance;