import React from "react";
import BodyContainer from "../../SharedUi/BodyContainer";
import Input from "../../SharedUi/Input";
import CardSelection from "../../SharedUi/CardSelection";
import {Title} from "../../SharedUi/Titles";
import {FilledButton} from "../../SharedUi/Buttons";
import {InputColumnContainer} from "../../SharedUi/InputColumnContainer";

const AddCard = () =>
{
    return(
        <BodyContainer>
            <Title>Add card</Title>
            <InputColumnContainer>
                <div style={{height:'3em'}}/>
                <Input title={'Card name'} type={'text'} value={''}/>
                <div style={{height:'3em'}}/>
            </InputColumnContainer>
            <CardSelection selectedCard={''} setSelectedCard={''}/>
            <div style={{height:'3em'}}/>
            <div>
                <FilledButton>Add card</FilledButton>
            </div>
        </BodyContainer>
        )
}

export default AddCard;