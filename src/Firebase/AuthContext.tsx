import React, {createContext, useEffect, useState} from "react";
import firebaseApp from "./FirebaseConfig";
const test = '123'

export const AuthContext = createContext<any | null>(null);
interface IAuthProvider {
    children: React.ReactNode;
}
export const AuthProvider = (props: IAuthProvider) => {
    const {children} = props;
    const [currentUser, setCurrentUser] = useState<any>();

    useEffect(() => {
        try{
            firebaseApp.auth().onAuthStateChanged((user) => setCurrentUser(user))
            console.log('changed')
            console.log(currentUser.uid)
        }
        catch (e){
            console.log(e);
        }
    })

    return (
        <AuthContext.Provider
            value={{currentUser, test}}>
            {children}
        </AuthContext.Provider>
    );
};