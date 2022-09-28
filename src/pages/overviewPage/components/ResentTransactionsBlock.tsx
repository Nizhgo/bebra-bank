import React from "react";
import styled from "styled-components";
import {Title} from "../../../components/Titles";
import TransactionBlock from "../../../components/TransactionBlock";

const ResentTransactionsBlock = () => {
    return (
        <ResentTransactionsComponentContainer>
            <Title style={{marginTop: '0'}}>
                Resent transactions
            </Title>
            <TransactionsContainer>
                <TransactionBlock/>
                <TransactionBlock/>
                <TransactionBlock/>
                <TransactionBlock/>
            </TransactionsContainer>
        </ResentTransactionsComponentContainer>

    )
}

const ResentTransactionsComponentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-row-start: 1;
  grid-column-start: 2;
`

const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  margin-top: 20px;
`
export default ResentTransactionsBlock;
