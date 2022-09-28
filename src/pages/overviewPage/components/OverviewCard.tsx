import React, {useState} from "react";
import styled from "styled-components";
import Explained from "../../../assets/images/expand_more_white_24dp.svg";
import {SmallButton} from "../../../components/Buttons";
import Input from "../../../components/Input";

interface IOverviewCard {
    image: string,
    title: string,
    balance: number,
}

const OverviewCard = (props: IOverviewCard) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div>
            <div style={{display: "flex", marginTop: '20px', alignItems: 'center', justifyContent: 'space-between'}}
                 onClick={() => setIsOpen(val => !val)}>
                <div style={{display: 'flex'}}>
                    <CardImg style={{height: '44px', width: 'auto'}} src={props.image}/>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginLeft: '20px'
                    }}>
                        <p style={{whiteSpace: 'nowrap'}}>{props.title}</p>
                        <p>{props.balance + 'B'}</p>
                    </div>
                </div>
                <ExplainedImg src={Explained} isOpen={isOpen}/>
            </div>
            {isOpen &&
                <CardInfo>
                    <CardData onChange={''} title={'Card number'} type={'text'} value={'3133 3232 5344 4597'}/>
                    <CardInfoContainer>
                        <CardData title={'CVV'} type={'text'} value={'123'}/>
                        <CardData title={'Exp date'} type={'text'} value={'12/29'}/>
                    </CardInfoContainer>
                    <CardInfoBtnRow>
                        <SmallButton>Close</SmallButton>
                        <SmallButton>Reissue</SmallButton>
                    </CardInfoBtnRow>
                    <hr/>
                </CardInfo>
            }
        </div>
    )
}


const CardInfo = styled.div`
  margin-top: 2em;
  animation: ani 0.4s forwards;


@keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
`
const CardInfoContainer = styled.div`
  display: flex;
  margin-top: 1em;
  gap: 1em;
  margin-right: 6em;
`
const CardInfoBtnRow = styled.div`
  margin-top: 1em;
display: flex;
gap: 0.4em;
`

const CardData = styled(Input)`
  max-width: 120px;
`

const CardImg = styled.img`
  width: 100%;
  image-rendering: optimizeSpeed;
  pointer-events: none;
`

interface IExplainedImg{
    isOpen: boolean;
}
const ExplainedImg = styled.img<IExplainedImg>`
    height: 32px;
    width: 32px;
    transition: all 0.3s ease;
  transform: ${p => p.isOpen? 'rotate(180deg)' : 'rotate(0)'};
`

export default OverviewCard;
