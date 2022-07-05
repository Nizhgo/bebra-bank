import React from "react";
import BodyContainer from "../../SharedUi/BodyContainer";
import Input from "../../SharedUi/Input";
import {Subtitle, Title} from "../../SharedUi/Titles";
import {InputColumnContainer} from "../../SharedUi/InputColumnContainer"
import {FilledButton} from "../../SharedUi/Buttons";

const TransferPage = () =>
{
    return(
        <BodyContainer>
            <Title>Transfer</Title>
            <Subtitle>Transfer bebra to another users</Subtitle>
            <InputColumnContainer>
                <Input title={'Card Number'} type={'text'} value={''} error={''}/>
                <Input title={'Amount'} type={'text'} value={''} error={''}/>
            </InputColumnContainer>
            <div style={{marginTop:'2em'}}>
                <FilledButton>Transfer</FilledButton>
            </div>
        </BodyContainer>
    )
}

export default TransferPage;