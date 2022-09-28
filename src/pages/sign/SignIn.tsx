import {Formik} from "formik";
import React, {useContext} from "react";
import styled from "styled-components";
import * as yup from "yup";
import BodyContainer from "../../components/BodyContainer";
import {FilledButton} from "../../components/Buttons";
import Input from "../../components/Input";
import {InputColumnContainer} from "../../components/InputColumnContainer";
import {
    MainTitle,
    Subtitle
} from "../../components/Titles";
import {AuthContext} from "../../firebase/AuthContext";
import firebaseApp from "../../firebase/FirebaseConfig";

const ValidationSchema = yup.object().shape({
    email: yup.string().email('Incorrect email format').required('Required'),
});

const SignIn = () => {
    const {currentUser} = useContext(AuthContext);
    const handleSubmit = async (values: { email: string, password: string }) => {
        try {
            await firebaseApp
                .auth()
                .signInWithEmailAndPassword(values.email, values.password).then((e) => {
                    console.log(e.user?.email);
                });
            console.log('ok');
        }
        catch (error) {
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
                            <Input title={'Почта'} type={'email'} onChange={handleChange} value={values.email}
                                   error={''} valueName={'email'}/>
                            <Input title={'Пароль'} type={'password'} onChange={handleChange} value={values.password}
                                   error={''} valueName={'password'}/>
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
    @media (max-width: 512px) {
        text-align: center;
    }
`

export default SignIn;
