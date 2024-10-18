import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import '../css/Login.css';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    useEffect(() => {
        validateToken();
    }, []);

    async function validateToken() {
        const user = JSON.parse(localStorage.getItem('user-info'));
        if (user) {
            const current = Math.round(Date.now() / 1000);
            if (user.token.exp < current) {
                localStorage.removeItem('user-info');
            } else {
                window.location.replace("/");
            }
        }
    }

    async function login() {
        const item = { email, password };
        fetch(window.apiurl + "login.php", {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item),
        })
            .then(response => {
                if (!response.ok) {
                    throw response;
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('user-info', JSON.stringify(data));
                alert(data.message);
                window.location.replace("/"); // Reload full page
            })
            .catch(async (err) => {
                const errorData = await err.json();
                alert(errorData.message);
            });
    }

    return (
        <div className="login-container">
            <h1>Welcome Back</h1>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        placeholder="Enter Your Email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password*</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        placeholder="Enter Your Password"
                        required
                    />
                </div>

                <Button onClick={login} className="btn" type="button">Log In</Button>
            </form>
        </div>
    );
}

export default Login;
