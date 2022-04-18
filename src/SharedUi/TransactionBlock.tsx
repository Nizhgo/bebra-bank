import React from "react";
import styled from "styled-components";
const TransactionBlock = () =>{
    return(
        <TransactionBlockContainer>
            <div style={{display:'flex'}}>
                <IconWrapper>Bв</IconWrapper>
                <div style={{width:'12px'}}/>
                <InfoContainer>
                    <ShopName>Vkusvill</ShopName>
                    <CategoryName>Supermarket</CategoryName>
                </InfoContainer>
            </div>
            <Amount>-312B</Amount>
        </TransactionBlockContainer>
    )
}

const TransactionBlockContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  //background-color: black;
  align-items: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-inline: 1em;
`



const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

const ShopName = styled.p`
  font-family: 'Space Grotesk', monospace;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
`

const CategoryName = styled(ShopName)`
font-size: 12px;
  color: dimgrey;
`

const Amount = styled(ShopName)`
  
`


const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  border-radius: 20px;
  background-color: #2DBE64;
`

export default TransactionBlock;