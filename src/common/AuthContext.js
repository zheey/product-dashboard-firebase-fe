import React, { useContext, useState, useEffect } from 'react';
import { firebaseAuth } from "../firebase";
import { userService } from '../services/userService';
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const  AuthProvider = ({ children }) => {
    const [user, setCurrentUser] = useState(null);
    const [userData, setUserdata] = useState(null);
    const login = (email, password) => {
        return firebaseAuth.signInWithEmailAndPassword(email, password);
    };
    const logout = () => {
        return firebaseAuth.signOut();
    };
    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
            setCurrentUser(user);
            if(user && user.uid) {
                userService.getUser(user.uid)
                .then(data => setUserdata(data)
                ,err => {
                    console.log(err);
                });
            }
        });

        return unsubscribe;
    }, []);
    const value = {
        user,
        login,
        logout,
        userData
    };
    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
};