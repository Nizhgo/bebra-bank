import React, {useContext} from "react";
import BodyContainer from "./SharedUi/BodyContainer";
import logo from "./Images/logo.svg"
import styled from "styled-components";
import {Link} from "react-router-dom";
const Header = () =>
{
    return(
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLogo src={logo}/>
                <HeaderMenuItem>(*/ω＼*)</HeaderMenuItem>
            </HeaderContainer>
        </HeaderWrapper>

    )
}


const HeaderWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 3px;
  `
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled.img`
  width: 168px;
  height: 36px;
`

const HeaderMenuItem = styled.a`
  font-style: normal;
  font-size: 15px;
`

export default Header;
