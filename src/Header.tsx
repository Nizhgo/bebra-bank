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
        <div style={{maxWidth: '1000px', marginInline:"auto"}}>
        <HeaderContainer>
            {currentUser && path !== '/'?
                <>
                    <Link to={'/overview'}>
                        <HeaderLogo src={logo}/>
                    </Link>
                    <Link to={'/profile'}>
                        <HeaderMenuItem>Profile</HeaderMenuItem>
                    </Link>
                </>
                :
                <>
                    <Link to={'/'}>
                        <HeaderLogo src={logo}/>
                    </Link>
                    <Link to={'/signin'}>
                        <HeaderMenuItem>Account</HeaderMenuItem>
                    </Link>
                </>
            }
        </HeaderContainer>
        </div>
    )
}

const HeaderContainer = styled.div`
  padding-top: 15px;
  padding-inline: 10px;
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
  font-weight: 700;
  font-size: 15px;
`

export default Header;
