import React, { useContext, useState, useCallback } from 'react';
import { firebaseAuth } from "../firebase";
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const  AuthProvider = ({ children }) => {
    const [user, setCurrentUser] = useState(null);
    const [userData, setUserdata] = useState(null);
    const login = async(email, password) => {
        await firebaseAuth.signInWithEmailAndPassword(email, password);
        
    };
    const logout = useCallback(() => {
            if(JSON.parse(localStorage.getItem("user"))) {
                firebaseAuth.signOut();
                localStorage.removeItem("user");
                localStorage.removeItem("userData");
                localStorage.removeItem("token");
                window.location.reload();
                return;
            }
        }, []);
  
    const value = {
        user,
        login,
        logout,
        userData,
        setCurrentUser,
        setUserdata,
    };
    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
};