import React from "react";
import {Title} from "../../SharedUi/Titles";
import styled from "styled-components";
import TransactionBlock from "../../SharedUi/TransactionBlock";
const ResentTransactions = () =>
{
    return(
        <ResentTransactionsContainer>
            <Title style={{marginTop:'0'}}>
                Resent transactions
            </Title>
            <div style={{display:"flex", flexDirection:'column', gap:'10px', marginTop:'20px'}}>
                <TransactionBlock/>
                <TransactionBlock/>
                <TransactionBlock/>
                <TransactionBlock/>
            </div>
        </ResentTransactionsContainer>

    )
}

const ResentTransactionsContainer = styled.div`
  width: 100%;
  display: flex;
  padding-inline: 0.5em;
  flex-direction: column;
  grid-row-start: 1;
  grid-column-start: 2;
`
export default ResentTransactions;