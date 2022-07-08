import React, {useContext} from 'react';
import Header from "./Header";
import Landing from "./Pages/LandingPage/Landing";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OverviewPage from "./Pages/OverviewPage/OverviewPage";
import AddCard from "./Pages/AddCardPage/AddCard";
import Profile from "./Pages/Profile/Profile";
import TransferPage from "./Pages/TransferPage/TransferPage";
import DonatePage from "./Pages/DonatePage/DonatePage";
import PrivateRoute from "./PrivateRoute";
import {AuthContext} from "./Firebase/AuthContext";
import PayOrTransferPage from "./Pages/PayOrTransferPage/PayOrTransferPage";
import SignIn from "./Pages/Sign/SignIn";
import SignUp from "./Pages/Sign/SignUp";
import TopUpPage from "./Pages/TopUpPage/TopUpPage";
import styled from "styled-components";
import Footer from "./SharedUi/Footer";

function App() {
    const {currentUser} = useContext(AuthContext);
    const isSession = (currentUser !== null);
  return (
      <AppWrapper>
          <AppContainer>
              <BrowserRouter>
                  <Header/>
                  <Routes>
                      <Route path="/" element={<Landing/>}/>
                      <Route path="/signup" element={
                          <PrivateRoute element={<SignUp/>} condition={!currentUser} navigateTo={'/overview'}/>}
                      />
                      <Route path="/signin" element={<PrivateRoute element={
                          <SignIn/>} condition={!currentUser} navigateTo={'/overview'}/>}
                      />
                      <Route path={'/overview'} element={
                          <PrivateRoute element={<OverviewPage/>} condition={isSession}/>}
                      />
                      <Route path="/pay-or-transfer" element={
                          <PrivateRoute element={<PayOrTransferPage/>} condition={isSession}/>}
                      />
                      <Route path="/topup" element={
                          <PrivateRoute element={<TopUpPage/>} condition={isSession}/>}
                      />
                      <Route path="/add-card" element={
                          <PrivateRoute element={<AddCard/>} condition={isSession}/>}
                      />
                      <Route path="/profile" element={
                          <PrivateRoute element={<Profile/>} condition={isSession}/>}
                      />
                      <Route path="/transfer" element={
                          <PrivateRoute element={<TransferPage/>} condition={isSession}
                          />}/>
                      <Route path="/donate" element={
                          <PrivateRoute element={<DonatePage/>} condition={isSession}/>}
                      />
                  </Routes>
              </BrowserRouter>
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
    min-height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export default App;
