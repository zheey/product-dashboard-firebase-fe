import React, { useContext, useState, useEffect } from 'react';
import { firebaseAuth } from "../firebase";
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const  AuthProvider = ({ children }) => {
    const [user, setCurrentUser] = useState(null);
    const login = (email, password) => {
        return firebaseAuth.signInWithEmailAndPassword(email, password);
    };
    const logout = () => {
        return firebaseAuth.signOut();
    };
    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);
    const value = {
        user,
        login,
        logout
    };
    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
};