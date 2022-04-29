import React from "react";
import styled from "styled-components";
import {FilledButton} from "../../../SharedUi/Buttons";
import ArrayForwardIcon from "../../../Images/arrow_forward_white_24dp.svg"
import TopUpIcon from "../../../Images/account_balance_wallet_white_24dp.svg"
import {Link} from "react-router-dom";

const BalanceBlock = () =>
{
    return(
    <BalanceBlockContainer>
        <BalanceTitle>Balance:</BalanceTitle>
        <BalanceAmount>B 3124.4</BalanceAmount>
            <BalanceButtonsContainer>
                <Link to={'/pay-or-transfer'}>
                <StrangeButton icon={ArrayForwardIcon} header={'Pay or transfer'}/>
                </Link>
                <Link to={'/topup'}>
                <StrangeButton icon={TopUpIcon} header={'Top Up'}/>
                </Link>
            </BalanceButtonsContainer>
    </BalanceBlockContainer>
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

const BalanceBlockContainer = styled.div`
  grid-column-start: 1;
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  background: #121212;
  border: 3px solid #2D2D2D;
  box-sizing: border-box;
  border-radius: 12px;
  `
const BalanceButtonContent = styled.div`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  justify-items: center;
  align-items: center;
  
  h6 {
    font-size: 13px;
    margin-left: 1em;
    text-align: start;
  }
`

const BalanceButtonsContainer = styled.div`
  margin-top: 1em;
  display: flex;
  gap: 1.2em;
  text-align: center;
`

const BalanceButton = styled(FilledButton)
`
  min-width: inherit;
  width: 100px;
  height: 32px;
  background-color: #212121;

  :hover {
    background-color: #0a0a0a;
  }`

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

export default BalanceBlock;