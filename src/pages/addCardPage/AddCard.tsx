import React from "react";
import BodyContainer from "../../components/BodyContainer";
import {FilledButton} from "../../components/Buttons";
import CardSelection from "../../components/CardSelection";
import Input from "../../components/Input";
import {InputColumnContainer} from "../../components/InputColumnContainer";
import {Title} from "../../components/Titles";

const AddCard = () => {
    const [inputValue, setInputValue] = React.useState('');
    return (
        <BodyContainer>
            <Title>Добавление бэбры</Title>
            <InputColumnContainer>
                <div style={{height: '3em'}}/>
                <Input title={'Название бебро4ки'} type={'text'} value={inputValue}
                       onChange={(e: any) => setInputValue(e.target.value)}/>
                <div style={{height: '3em'}}/>
            </InputColumnContainer>
            <CardSelection selectedCard={''} setSelectedCard={''}/>
            <div style={{height: '3em'}}/>
            <div>
                <FilledButton>Add card</FilledButton>
            </div>
        </BodyContainer>
        )
}

export default AddCard;
