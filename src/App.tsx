import React from 'react';
import Header from "./Header";
import Landing from "./Pages/LandingPage/Landing";
import styled from "styled-components";
import Footer from "./SharedUi/Footer";


function App() {
  return (
      <AppWrapper>
          <AppContainer>
              <Header/>
              <Landing/>
              <Footer/>
          </AppContainer>
      </AppWrapper>

  );
}

const AppContainer = styled.div`
    padding-inline: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `


const AppWrapper = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export default App;
