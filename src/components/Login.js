import React, { useState } from "react";
import TextField from "../common/TextField";
import Button from "../common/Button";
import { useAuth } from "../common/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
        error: null,
        isLogging: false
    });
    const { login } = useAuth();
    const history = useHistory();

    const handleChange = (event) => {
        const { value, name } = event.target;
        setLoginState(prevState => ({
            ...prevState,
            [name]: value 
        }));
    };

    const handleLogin = async (event) => {
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
            history.push("/");
        } catch {
            setLoginState(prevState => ({
                ...prevState,
                isLogging: false,
                error: "Failed to login user"
            }));
        }
    };
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