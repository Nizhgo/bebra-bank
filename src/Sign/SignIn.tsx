import React from "react";
import styled from "styled-components";
import BodyContainer from "../SharedUi/BodyContainer";
import {MainTitle, Title} from "../SharedUi/Titles";
import Input from "../SharedUi/Input";
import {FilledButton} from "../SharedUi/Buttons";
import {Formik} from "formik";
import {Subtitle} from "../SharedUi/Titles";
import {ErrorBox} from "../SharedUi/ErrorBox";
import * as yup from "yup";

const ValidationSchema = yup.object().shape({
    email: yup.string().email('Incorrect email format').required('Required'),
});

const SignIn = () =>
{
    return(
        <BodyContainer>
            <MainTitle>
                Log in to BebraBank
            </MainTitle>
            <Subtitle>Enter your email and password</Subtitle>
            <Formik initialValues={{
                email: '',
                password: '',
            }} onSubmit={(values => {alert(JSON.stringify(values))})}>
                {({handleSubmit, handleChange, values, errors, handleBlur, touched}) =>

                    <form style={{marginTop: '40px', maxWidth: '400px'}} onSubmit={handleSubmit}>
                        <ErrorBox/>
                        <Input title={'email'} type={'email'} onChange={handleChange} value={values.email}/>
                        <ErrorBox/>
                        <Input title={'password'} type={'password'} onChange={handleChange} value={values.password}/>
                        <ButtonWrapper>
                            <FilledButton type={'submit'}>LogIn</FilledButton>
                        </ButtonWrapper>
                    </form>
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