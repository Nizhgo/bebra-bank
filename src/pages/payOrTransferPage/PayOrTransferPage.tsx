import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import BodyContainer from "../../components/BodyContainer";
import {FilledButton} from "../../components/Buttons";
import {Card} from "../../components/Card";
import {Title} from "../../components/Titles";

const PayOrTransferPage = () => {
    return (
        <BodyContainer>
            <Title>Pay or transfer</Title>
            <div style={{marginTop: '1.49em', display: 'flex', gap: '1em'}}>
                <Link to={'/transfer'}>
                    <Card style={{width: '170px', height: '132px'}}>
                        <h6>Transfer</h6>
                        <p style={{color: "grey", fontSize: '14px', marginTop: '0.4em'}}>Transfer money to another bebra
                            bank user</p>
                    </Card>
                </Link>
                <Link to={'/donate'}>
                    <Card style={{width: '170px', height: '132px'}}>
                        <h6>Donate</h6>
                        <p style={{color: "grey", fontSize: '14px', marginTop: '0.4em'}}>Donate bebra</p>
                    </Card>
                </Link>
            </div>
            <div style={{marginTop: '3em'}}/>
            <Title>Test payment</Title>
            <div style={{maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1em', marginTop: '1.5em'}}>
                <Card style={{paddingTop: '0.7em', paddingBottom: '0.7em'}}>
                    <Grid>
                        <p>Pay for Spotify</p>
                        <input placeholder={'12'} style={{width: 'auto'}}/>
                        <FilledButton style={{width: 'auto'}}>Pay</FilledButton>
                    </Grid>
                </Card>
                <Card style={{paddingTop: '0.7em', paddingBottom: '0.7em'}}>
                    <Grid>
                        <p>Pay for Vkusvill</p>
                        <input placeholder={'12'} style={{width: 'auto'}}/>
                        <FilledButton style={{width: 'auto'}}>Pay</FilledButton>
                    </Grid>
                </Card>
                <Card style={{paddingTop: '0.7em', paddingBottom: '0.7em'}}>
                    <Grid>
                        <p>Pay for Pyaterochka</p>
                        <input placeholder={'12'} style={{width: 'auto'}}/>
                        <FilledButton style={{width: 'auto'}}>Pay</FilledButton>
                    </Grid>
                </Card>
                <Card style={{paddingTop: '0.7em', paddingBottom: '0.7em'}}>
                    <Grid>
                        <p>Pay for Azbuka Vkusa</p>
                        <input placeholder={'12'} style={{width: 'auto'}}/>
                        <FilledButton style={{width: 'auto'}}>Pay</FilledButton>
                    </Grid>
                </Card>
            </div>
        </BodyContainer>

    )
}

const Grid = styled.div`

  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  align-items: center;
  grid-auto-rows: auto;
  grid-gap: 2em;

  input {
    max-width: 120px;
    border-bottom: 3px solid #2D2D2D;
    text-align: center;
  }
  
  @media(max-width: 512px)
  {
    display: flex;
    flex-direction: column;
    gap: 1em;
    text-align: center;
    
    input{
      max-width: unset;
      border-radius: 20px;
      border: 3px solid #2D2D2D;
      height: 36px;
      width: 100%;
    }
  }
  
`

export default PayOrTransferPage;
