import React, {useContext,useState,useEffect} from 'react'
import {auth} from "../firebase"

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({children}) {

    const [currentUser, setCurrentUser]=useState();

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    useEffect(() => {
        const unsubscriberd = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
        })

        return unsubscriberd;
    }, [])

    const value={
        currentUser,
        signup,
        login
    }

    return (
       <AuthContext.Provider value={value}>
           {children}
       </AuthContext.Provider>
    )
}
