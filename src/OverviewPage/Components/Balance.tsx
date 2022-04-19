import React from "react";
import styled from "styled-components";
import {FilledButton} from "../../SharedUi/Buttons";
import ArrayForwardIcon from "../../Images/arrow_forward_white_24dp.svg"
import TopUpIcon from "../../Images/account_balance_wallet_white_24dp.svg"

const Balance = () =>
{
    return(
    <BalanceContainer>
        <BalanceTitle>Balance:</BalanceTitle>
        <BalanceAmount>B 3124.4</BalanceAmount>
            <BalanceButtonsContainer>
                <StrangeButton icon={ArrayForwardIcon} header={'Pay or transfer'}/>
                <StrangeButton icon={TopUpIcon} header={'Top Up'}/>

            </BalanceButtonsContainer>
    </BalanceContainer>
    )
}

interface IBalanceButton {
    icon: string,
    header: string
}
const StrangeButton = (props: IBalanceButton) =>
{
    const {icon, header} = props;
    return(
        <BalanceButton>
            <BalanceButtonContent>
                <img style={{height:'24px', width:'24px'}} src={icon}/>
                <h6>{header}</h6>
            </BalanceButtonContent>
        </BalanceButton>
    )
}

const BalanceContainer = styled.div`
  grid-column-start: 1;
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  background: #121212;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 20px;
  `
const BalanceButtonContent = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  
  h6 {
    font-size: 13px;
    margin-left: 1em;
    text-align: start;
  }
`

const BalanceButtonsContainer = styled.div`
 margin-top: 1em;
 // display: grid;
 // grid-template-columns: 1fr 1fr;
 //// grid-template-rows: 2fr 1fr;
 // grid-column-gap: 1.4em;
  display: flex;
  gap: 1.4em;
`

const BalanceButton = styled.button`
  background: black;
  padding-inline: 0.6em;
  padding-top: 0.3em;
  padding-bottom: 0.4em;
  width: 100px;
  font-size: 14px;
  min-width: 4em;
  border: 1px solid #2f2f2f;
  border-radius: 100px;
`


const BalanceTitle = styled.p`
  margin-top: 15px;
  font-family: 'Space Grotesk', monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  color: #FFFFFF;
`

const BalanceAmount = styled.p`
  margin-top: 8px;
  font-family: 'Space Grotesk', monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 46px;
  color: #BFFD7D;

`

export default Balance;