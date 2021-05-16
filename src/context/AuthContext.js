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
    const [orders, setOrders] = useState([]);
    const login = (email, password) => {
        return firebaseAuth.signInWithEmailAndPassword(email, password);
    };
    const logout = () => {
        firebaseAuth.signOut();
        localStorage.removeItem("user");
        return;
    };
    useEffect(() => {
        let currentUser = JSON.parse(localStorage.getItem('user'));
        let currentUserData = JSON.parse(localStorage.getItem('userData'));
        if(!currentUser && !currentUserData) {
            const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
                setCurrentUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                user.getIdToken().then(function(idToken) {
                    localStorage.setItem('token', JSON.stringify(idToken));
                    console.log(idToken); 
                });
                if(!currentUser && user && user.uid) {
                    userService.getUser(user.uid)
                    .then(data => {
                        localStorage.setItem('userData', JSON.stringify(data));
                        setUserdata(data)
                    }
                    ,err => {
                        console.log("error",err);
                    });
                }
            });
    
            return unsubscribe;
        } else {
            setCurrentUser(currentUser);
            setUserdata(currentUserData)
        }
    }, []);
    const value = {
        user,
        login,
        logout,
        userData,
        orders,
        setOrders
    };
    return(
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
};