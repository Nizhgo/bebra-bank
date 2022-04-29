import React, {useContext, useRef, useState} from "react";
import styled from "styled-components";
import BodyContainer from "../../SharedUi/BodyContainer";
import Input from "../../SharedUi/Input";
import {Formik, FormikValues} from "formik";
import {FilledButton} from "../../SharedUi/Buttons";
import {MainTitle, Title} from "../../SharedUi/Titles";
import BlackCard from "../../Images/Cards/BlackCard.svg"
import {Subtitle} from "../../SharedUi/Titles";
import * as yup from 'yup';
import { InputColumnContainer } from "../../SharedUi/InputColumnContainer";
import CardSelection from "../../SharedUi/CardSelection";
import firebaseApp from "../../Firebase/FirebaseConfig";
import 'firebase/compat/auth';
import {AuthContext} from "../../Firebase/AuthContext";
import {Navigate} from "react-router-dom";

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



const SignUp = () =>
{
    const [selectedCard, setSelectedCard] = useState<string>(BlackCard);
    const {currentUser} = useContext(AuthContext);
    const onSubmit = async (values: {name: string, surname: string, email: string, password: string}) => {
        try {
            await firebaseApp
                .auth()
                .createUserWithEmailAndPassword(values.email, values.password);
                console.log(currentUser.uid);
        } catch (error) {
            alert(error);
        }
    }
    return(
        <BodyContainer>
        <MainTitle>Creating a account to BebraBank</MainTitle>
            <Subtitle>Enter your name and surname, email</Subtitle>
            <Formik initialValues={{
                name: '',
                surname: '',
                email: '',
                password: '',
            }} onSubmit={values => {onSubmit(values)}} validationSchema={ValidationSchema}>
                {({handleSubmit, handleChange, values, errors,handleBlur, touched}) =>
                    <>
                    <form onSubmit={handleSubmit}>
                        <InputColumnContainer>
                            <Input title={'name'} type={'text'} value={values.name} onChange={handleChange} onBlur={handleBlur} error={touched.name && errors.name? errors.name : ''}/>
                            <Input title={'surname'} type={'text'} value={values.surname} onChange={handleChange} onBlur={handleBlur} error={touched.surname && errors.surname? errors.surname : ''}/>
                            <Input title={'email'} type={'email'} value={values.email} onChange={handleChange} onBlur={handleBlur} error={touched.email && errors.email? errors.email : ''}/>
                            <Input title={'password'} type={'password'} value={values.password} onChange={handleChange} onBlur={handleBlur} error={touched.password && errors.password? errors.password : ''}/>
                        </InputColumnContainer>
                        <div style={{marginTop:'50px'}}/>
                        <Title>Choose the design of your card</Title>
                        <div style={{marginTop:'24px'}}/>
                        <CardSelection selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
                        <ButtonWrapper>
                        <FilledButton type='submit'>SignUn</FilledButton>
                        </ButtonWrapper>
                    </form>
                    </>
                }
            </Formik>

</BodyContainer>
        )
}


const ButtonWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  @media(max-width: 512px) {
  text-align: center;
  }
`


export default SignUp;