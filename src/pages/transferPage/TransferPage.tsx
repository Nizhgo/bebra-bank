import React from "react";
import BodyContainer from "../../components/BodyContainer";
import {FilledButton} from "../../components/Buttons";
import Input from "../../components/Input";
import {InputColumnContainer} from "../../components/InputColumnContainer"
import {
    Subtitle,
    Title
} from "../../components/Titles";

const TransferPage = () => {
    return (
        <BodyContainer>
            <Title>Transfer</Title>
            <Subtitle>Transfer bebra to another users</Subtitle>
            <InputColumnContainer>
                <Input title={'Card Number'} type={'text'} value={''} error={''}/>
                <Input title={'Amount'} type={'text'} value={''} error={''}/>
            </InputColumnContainer>
            <div style={{marginTop: '2em'}}>
                <FilledButton>Transfer</FilledButton>
            </div>
        </BodyContainer>
    )
}

export default TransferPage;
