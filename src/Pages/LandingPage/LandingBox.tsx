import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {FilledButton} from "../../components/Buttons";

interface IBox {
    title: string,
    image: string,
    linkTitle: string,
    link: string,
}

const LandingBox = (props: IBox) => {
    return (
        <BoxCard style={{backgroundImage: `url(${props.image})`}}>
            <BoxTitle>
                {props.title}
            </BoxTitle>
            <div>
                <FilledButton>
                    <Link to={props.link}>
                        {props.linkTitle}
                    </Link>
                </FilledButton>
            </div>
        </BoxCard>
    )
}

export default LandingBox;




const BoxTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  @media(max-width: 680px)
  {
    font-size: 27px;
  }
`;
const BoxCard = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    width: 100%;
    text-align: start;
    padding: 2.6em;
    aspect-ratio: 0.784;
    background-color: #171718;
    color: white;
    border-radius: 20px;
    transition: all 0.3s ease 0s;
    
    :hover {
        background-size: 102%;
    }
`;
