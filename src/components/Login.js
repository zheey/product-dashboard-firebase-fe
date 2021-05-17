import React, { useState, useEffect } from "react";
import TextField from "../common/TextField";
import Button from "../common/Button";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { firebaseAuth } from "../firebase";
import { userService } from "../services/userService";

const Login = () => {
    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
        error: null,
        isLogging: false
    });
    const { login, setCurrentUser, setUserdata, logout } = useAuth();
    const history = useHistory();

    const handleChange = (event) => {
        const { value, name } = event.target;
        setLoginState(prevState => ({
            ...prevState,
            [name]: value 
        }));
    };

    const handleLogin = async (event) => {
        console.log("in login")
        event.preventDefault();
        setLoginState(prevState => ({
            ...prevState,
            isLogging: true,
            error: null
        }));
        try {
            await login(loginState.email, loginState.password);
            setLoginState(prevState => ({
                ...prevState,
                isLogging: false,
                error: null
            }));
            firebaseAuth.onAuthStateChanged(user => {
                        setCurrentUser(user);
                        user.getIdToken().then(function(idToken) {
                            localStorage.setItem('user', JSON.stringify(user));
        
                            localStorage.setItem('token', JSON.stringify(idToken));
                        });
                        if(user && user.uid) {
                            userService.getUser(user.uid)
                            .then(data => {
                                localStorage.setItem('userData', JSON.stringify(data));
                                setUserdata(data)
                                history.push("/");

                            }
                            ,err => {
                                console.log("error",err);
                            });
                        }
                    });
        } catch {
            setLoginState(prevState => ({
                ...prevState,
                isLogging: false,
                error: "Failed to login user"
            }));
        }
    };

    useEffect(() => {
        logout();
    }, [logout])
 return(
     <div className="login">
         <form onSubmit={handleLogin}>
            <TextField name="email" type="text" value={loginState.email} onChange={handleChange} label="Email" />
            <TextField name="password" type="password" value={loginState.password} onChange={handleChange} label="Password" />
            <Button label="Login"/>
         </form>
     </div>
 )
};

export default Login;