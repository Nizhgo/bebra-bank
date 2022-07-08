import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrapper>
        <FooterContainer>
            <ThreeGridContainer>
                <SocialMediaLinksContainer>
                    <SocialMediaLinksItem href={'https://instagram.com/bebrabank?igshid=YmMyMTA2M2Y='} target={'_blank'}>
                        инстаграм
                    </SocialMediaLinksItem>
                    <SocialMediaLinksItem href={'https://vt.tiktok.com/ZSdoAQ8VH'} target={'_blank'}>
                        тикток
                    </SocialMediaLinksItem>
                    <SocialMediaLinksItem href={'https://github.com/nizhgo/bebra-bank'} target={'_blank'}>
                        гитхаб
                    </SocialMediaLinksItem>
                </SocialMediaLinksContainer>
                <div>
                </div>
                <EmailContainer>
                    <SocialMediaLinksItem>admin@bebrabank.ru</SocialMediaLinksItem>
                </EmailContainer>
            </ThreeGridContainer>
            <LegalInformationContainer>
                <p>© 2022. «Бебра Банк», официальный сайт. Генеральная лицензия Банка Приколов № 228 от 3 июня 2022 г.</p>
            </LegalInformationContainer>
        </FooterContainer>
        </FooterWrapper>
    );
}

export default Footer;

const FooterWrapper = styled.div`
      position: relative;
    bottom: 0;
    margin-top: 4em;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

const LegalInformationContainer = styled.div`
    margin-top: 22px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 15px;
    color: lightslategray;
`

const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

const EmailContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 100%;
  
  @media (max-width: 768px) {
    justify-content: start;
    margin-top: 10px;
  }
`


const ThreeGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    width: 100%;
    align-items: center;
    justify-content: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const SocialMediaLinksItem = styled.a`
  font-style: normal;
  font-size: 18px;
  font-weight: 600;
  color: #ececec;
  text-decoration: none;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  :hover {
    color: #ababab;
  }
`;
const SocialMediaLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 3px;
  
    @media (max-width: 768px) {
        flex-direction: column;
      gap: 10px;
        align-items: start;
    }
`
