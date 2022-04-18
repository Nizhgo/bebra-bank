import React, {useRef, useState} from "react";
import styled from "styled-components";
import BodyContainer from "../SharedUi/BodyContainer";
import Input from "../SharedUi/Input";
import {Formik} from "formik";
import {FilledButton} from "../SharedUi/Buttons";
import {MainTitle, Title} from "../SharedUi/Titles";
import BlackCard from "../Images/Cards/BlackCard.svg"
import WhiteCard from "../Images/Cards/WhiteCard.svg"
import MalevichCard from  "../Images/Cards/MalevichCard.svg"
import JapanCard from "../Images/Cards/JapanCard.svg"
import AmazingCard from "../Images/Cards/AmazingCard.svg"
import DigitalCard from "../Images/Cards/BlueDigital.svg"
import FrogCard from "../Images/Cards/FrogCard.svg"
import PaintCard from "../Images/Cards/PaintCard.svg"
import {Subtitle} from "../SharedUi/Titles";
import * as yup from 'yup';
import {ErrorBox} from "../SharedUi/ErrorBox";

interface ISignUpForm {
    name: string,
    surname: string,
    email: string,
    password: string,
    cardStyle: string,
    //date: number,
}
const ValidationSchema = yup.object().shape({
    name: yup.string().typeError('The name must consist of only letters').required('Required'),
    surname: yup.string().typeError('The surname must consist of only letters').required('Required'),
    email: yup.string().email('Incorrect email format').required('Required'),
    password: yup.string().min(6, 'Must be at least 6 symbols').required('Required'),
});

const Cards: string[] = [
    BlackCard,
    WhiteCard,
    AmazingCard,
    PaintCard,
    MalevichCard,
    JapanCard,
    DigitalCard,
    FrogCard,
]

const SignUp = () =>
{
    const [selectedCard, setSelectedCard] = useState<string>(BlackCard);
    return(
        <BodyContainer>
        <MainTitle>Creating a account to BebraBank</MainTitle>
            <Subtitle>Enter your name and surname, email</Subtitle>
            <Formik initialValues={{
                name: '',
                surname: '',
                email: '',
                password: '',
            }} onSubmit={(values => {alert(JSON.stringify(values))})} validationSchema={ValidationSchema}>
                {({handleSubmit, isValid, handleChange, values, errors,handleBlur, touched}) =>
                    <form onSubmit={handleSubmit}>
                        <div style={{marginTop: '15px', maxWidth: '400px'}}>
                            <ErrorBox>
                                {touched.name && errors.name && <p>{errors.name}</p>}
                            </ErrorBox>
                            <Input title={'name'} type={'text'} value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                            <ErrorBox>
                                {touched.surname && errors.surname && <p>{errors.surname}</p>}
                            </ErrorBox>
                            <Input title={'surname'} type={'text'} value={values.surname} onChange={handleChange} onBlur={handleBlur}/>
                            <ErrorBox>
                                {touched.email && errors.email && <p>{errors.email}</p>}
                            </ErrorBox>
                            <Input title={'email'} type={'email'} value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                            <ErrorBox>
                                {touched.password && errors.password && <p>{errors.password}</p>}
                            </ErrorBox>
                            <Input title={'password'} type={'password'} value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                        </div>
                        <div style={{marginTop:'50px'}}/>
                        <Title>Choose the design of your card</Title>
                        <div style={{marginTop:'24px'}}/>
                        <CardsWrapper>
                            {Cards.map((card) => {
                                return (
                                    <CardImgWrapper onClick={() => setSelectedCard(card)}>
                                        <CardImg src={card} isSelected={selectedCard === card}/>
                                    </CardImgWrapper>
                                )
                            })}
                        </CardsWrapper>
                        <ButtonWrapper>
                        <FilledButton type='submit'>SignUn</FilledButton>
                        </ButtonWrapper>
                    </form>
                }
            </Formik>

</BodyContainer>
        )
}

 interface ISelectedProps {
    isSelected?: boolean
 }

const ButtonWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  @media(max-width: 512px) {
  text-align: center;
  }
`

const CardImg = styled.img<ISelectedProps>`
  transition: 0.1s;
  width: 205px;
  height: 123px;
  image-rendering: optimizeSpeed;
  box-sizing: border-box;
  padding-bottom: 10px;
  border-bottom: ${p => p.isSelected === true? '5px solid #5257D3': 'none'};
  pointer-events: none;
  
  
  :focus{
    border-width: 100px;
    border-color: darkred;
  }
`

const CardsWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    height: auto;
  @media(max-width: 512px)
  {
    margin-inline: -1.314em;
    width: 100vw;
    flex-wrap: nowrap;
    overflow-x: scroll;
    scroll-behavior: auto;
  }
    
`

const CardImgWrapper = styled.div`
  :hover
  {
    scale: 1.05;
  }
`

export default SignUp;