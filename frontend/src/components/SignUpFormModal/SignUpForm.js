import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './signupForm.css'
import appleLogo from "../../images/apple-logo.png"


function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">

            <img className="signupImg" src={appleLogo} />
            <h1>Create your Sound Apple ID</h1>
            <h3>You may also select the demo option below</h3>


            <h1>Sign Up</h1>
            <input
                className="signup-textbox"
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                placeholder="Username"
                className="signup-textbox"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />

            <input
                placeholder="Password"
                className="signup-textbox"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                placeholder="Confirm Password"
                className="signup-textbox"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button type="submit" disabled={errors.length > 0} className="signup-button">Sign Up</button>

            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
        </form>
    );
}

export default SignupForm;
