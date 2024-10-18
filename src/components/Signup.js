import React, { useState } from 'react';
import { Button } from './Button';
import '../css/Signup.css';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    async function signup() {
        console.warn(name, email, phone, password);
        let item = { name, email, phone, password };
        let result = await fetch("http://localhost/e-learning-platform/api/signup.php", {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item),
        });
        result = await result.json();
        alert(result["message"]);
        window.location.replace("/login");
    }

    return (
        <div className="signup-container">
            <h1>Let's Get Started</h1>
            <form className="signup-form">
                <div className="form-group">
                    <label htmlFor="name">Name*</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        placeholder="Enter Your Name"
                        required
                    />
                </div>

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
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        id="phone"
                        placeholder="Enter Your Phone Number"
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

                <Button onClick={signup} className="btn" type="button">Register</Button>
            </form>
        </div>
    );
}

export default Signup;
