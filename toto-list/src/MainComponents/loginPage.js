import React, { useState } from 'react';
import PasswordField from './PasswordField';
import TextField from './TextField';
import ButtonConatiner from './Button';
import './todo.css';

function LoginPageContainer({ addTask }) {
    const [email, setEmailID] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const onTextfieldChange = (e) => {
        setEmailID(e.target.value)
    }
    const onPasswordfieldChange = (e) => {
        setPassword(e.target.value)
    }
    const SignInClick = () => {
        password.length < 5 ? setPasswordError(true) : setPasswordError(false);
        !email.length ? setEmailError(true) : setEmailError(false);
    }

    return (
        <div id="formContent">
            <div className="signinContainer">
                <h2>Sign In</h2>
                <TextField isError={emailError} ErrorMessage="Enter valid Email Id." placeholder="Email Id" handleChange={onTextfieldChange} />
                <br>
                </br>
                <PasswordField isError={passwordError} ErrorMessage="Password should be alteast of 6 characters." handleChange={onPasswordfieldChange} />
                <br></br>
                <ButtonConatiner onClick={SignInClick} placeholder="Sign IN" />
                <br>
                </br>
                <div>
                    <p>Already have an Account</p>
                </div>
            </div>

            <div className="signupContainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpeAoszktrQnVN1ORlXS9Oqz7OkOYziI83pA5GUuxaZVPo2wi_&usqp=CAU" />
            </div>
        </div>

    );
}
export default LoginPageContainer;
