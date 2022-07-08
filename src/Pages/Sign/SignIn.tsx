import React, {useContext} from "react";
import styled from "styled-components";
import BodyContainer from "../../SharedUi/BodyContainer";
import {MainTitle, Title} from "../../SharedUi/Titles";
import Input from "../../SharedUi/Input";
import {FilledButton} from "../../SharedUi/Buttons";
import {Formik} from "formik";
import {Subtitle} from "../../SharedUi/Titles";
import * as yup from "yup";
import {InputColumnContainer} from "../../SharedUi/InputColumnContainer";
import firebaseApp from "../../Firebase/FirebaseConfig";
import {AuthContext} from "../../Firebase/AuthContext";

const ValidationSchema = yup.object().shape({
    email: yup.string().email('Incorrect email format').required('Required'),
});

const SignIn = () =>
{
    const {currentUser} = useContext(AuthContext);
    const handleSubmit = async (values: {email: string, password: string}) => {
        try {
            await firebaseApp
                .auth()
                .signInWithEmailAndPassword(values.email, values.password).
            then((e) => {
                    console.log(e.user?.email);
                });
            console.log('ok');
        } catch (error) {
            alert(error);
        }
    }
    return(
        <BodyContainer>
            <MainTitle>
                Авторизация
            </MainTitle>
            <Subtitle>Введите вашу почту и пароль</Subtitle>
            <Formik initialValues={{
                email: '',
                password: '',
            }} onSubmit={(values => handleSubmit(values))}>
                {({handleSubmit, handleChange, values, errors, handleBlur, touched}) =>

                    <InputColumnContainer>
                    <form onSubmit={handleSubmit}>
                        <Input title={'Почта'} type={'email'} onChange={handleChange} value={values.email} error={''}/>
                        <Input title={'Пароль'} type={'password'} onChange={handleChange} value={values.password} error={''}/>
                        <ButtonWrapper>
                            <FilledButton type={'submit'}>Войти</FilledButton>
                        </ButtonWrapper>
                    </form>
                    </InputColumnContainer>
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

export default SignIn;