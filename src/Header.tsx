import React, {useContext} from "react";
import BodyContainer from "./SharedUi/BodyContainer";
import logo from "./Images/logo.svg"
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {AuthContext} from "./Firebase/AuthContext";
const Header = () =>
{
    const path = useLocation().pathname;
    const {currentUser} = useContext(AuthContext);
    return(
        <HeaderWrapper>
        <HeaderContainer>
            {currentUser && path !== '/'?
                <>
                    <Link to={'/overview'}>
                        <HeaderLogo src={logo}/>
                    </Link>
                    <Link to={'/profile'}>
                        <HeaderMenuItem>Профиль</HeaderMenuItem>
                    </Link>
                </>
                :
                <>
                    <Link to={'/'}>
                        <HeaderLogo src={logo}/>
                    </Link>
                    <Link to={'/signin'}>
                        <HeaderMenuItem>Войти</HeaderMenuItem>
                    </Link>
                </>
            }
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
  cursor: pointer;
`

const HeaderMenuItem = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`

export default Header;
