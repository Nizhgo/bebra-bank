import React, {useContext} from 'react';
import {
	BrowserRouter,
	Route,
	Routes
} from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import {AuthContext} from "./firebase/AuthContext";
import Header from "./Header";
import AddCard from "./pages/addCardPage/AddCard";
import DonatePage from "./pages/donatePage/DonatePage";
import Landing from "./pages/landingPage/Landing";
import OverviewPage from "./pages/overviewPage/OverviewPage";
import PayOrTransferPage from "./pages/payOrTransferPage/PayOrTransferPage";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/sign/SignIn";
import SignUp from "./pages/sign/SignUp";
import TopUpPage from "./pages/topUpPage/TopUpPage";
import TransferPage from "./pages/transferPage/TransferPage";
import PrivateRoute from "./PrivateRoute";

function App() {
	const {currentUser} = useContext(AuthContext);
	const isSession = (currentUser !== null);
	return (
		<AppWrapper>
			<AppContainer>
				<BrowserRouter>
					<Header/>
					<Routes>
						<Route path='/' element={<Landing/>}/>
						<Route path='/signup' element={
							<PrivateRoute element={<SignUp/>} condition={!currentUser} navigateTo={'/overview'}/>}
						/>
						<Route path='/signin' element={<PrivateRoute element={
							<SignIn/>} condition={!currentUser} navigateTo={'/overview'}/>}
						/>
						<Route path={'/overview'} element={
							<PrivateRoute element={<OverviewPage/>} condition={isSession}/>}
						/>
						<Route path='/pay-or-transfer' element={
							<PrivateRoute element={<PayOrTransferPage/>} condition={isSession}/>}
						/>
						<Route path='/topup' element={
							<PrivateRoute element={<TopUpPage/>} condition={isSession}/>}
						/>
						<Route path='/add-card' element={
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
    width: 100%;
    box-sizing: border-box;
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
