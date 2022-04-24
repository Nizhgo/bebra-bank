import React from "react";
import {Subtitle, Title} from "../../SharedUi/Titles";
import BodyContainer from "../../SharedUi/BodyContainer";
import {FilledButton} from "../../SharedUi/Buttons";
import styled from "styled-components";

const TopUpPage = () =>
{
    return(
        <BodyContainer>
            <div style={{display:'flex', flexDirection:'column', gap:'3.3em', justifyContent:'center', textAlign:'center'}} >
                <div>
                    <Title>ATM</Title>
                    <div style={{height:'0.4em'}}/>
                    <Subtitle>Test TopUp</Subtitle>
                </div>
                <ATMInput type={'number'}/>
                <FilledButton style={{maxWidth:'130px', marginInline:'auto'}}>
                    TopUp
                </FilledButton>
            </div>
        </BodyContainer>
    )
}

const ATMInput = styled.input`
  padding: 0.4em;
  margin-inline: auto;
  max-width: 300px;
  width: auto;
  border: solid 3px #2d2d2d;
  border-radius: 20px;
  font-size: 42px;
  line-height: 44px;
`

export default TopUpPage;