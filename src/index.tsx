import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthProvider} from "./firebase/AuthContext";
import './index.css'
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);
root.render(
    <AuthProvider>
    <App/>
    </AuthProvider>
);

// If you want to start measuring performance in your firebaseApp, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
