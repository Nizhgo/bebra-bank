import React from 'react';
import Header from "./Header";
import Landing from "./LandingPage/Landing";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./Sign/SignUp";
import SignIn from "./Sign/SignIn";
import OverviewPage from "./OverviewPage/OverviewPage";


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
      </Routes>
      </BrowserRouter>
  );
}

export default App;
