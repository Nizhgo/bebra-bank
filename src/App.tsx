import React from 'react';
import Header from "./Header";
import Landing from "./Pages/LandingPage/Landing";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./Pages/Sign/SignUp";
import SignIn from "./Pages/Sign/SignIn";
import OverviewPage from "./Pages/OverviewPage/OverviewPage";
import PayOrTrasferPage from "./Pages/PayOrTransferPage/PayOrTrasferPage";
import TopUpPage from "./Pages/TopUpPage/TopUpPage";


function App() {
  return (
      <BrowserRouter>
        <Header/>
          <Routes>
          <Route path="/" element={<Landing/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/overview" element={<OverviewPage/>}/>
              <Route path="/pay-or-transfer" element={<PayOrTrasferPage/>}/>
              <Route path="/topup" element={<TopUpPage/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
