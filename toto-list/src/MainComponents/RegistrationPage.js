import React, { useState } from 'react';
import PasswordField from './PasswordField';
import TextField from './TextField';
import ButtonConatiner from './Button';
import Zoom from 'react-reveal/Zoom';
import {
    Link
} from "react-router-dom";
import './todo.css';


function RegestrationPageContainer({ addTask }) {
    const [email, setEmailID] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [userNameError, setuserNameError] = useState(false);
    const onTextfieldChange = (e) => {
        setEmailID(e.target.value)
    }
    const onPasswordfieldChange = (e) => {
        setPassword(e.target.value)
    }
    const onUserNamefieldChange = (e) => {
        setUserName(e.target.value)
    }
    const SignInClick = () => {
        password.length < 5 ? setPasswordError(true) : setPasswordError(false);
        !email.length ? setEmailError(true) : setEmailError(false);
        !userName.length ? setuserNameError(true) : setuserNameError(false);
    }

    return (
        <Zoom>
            <div id="formContent">
                <div className="signinContainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpeAoszktrQnVN1ORlXS9Oqz7OkOYziI83pA5GUuxaZVPo2wi_&usqp=CAU" height="600px" />

                </div>

                <div className="signupContainer">
                    <h2>Sign Up</h2>
                    <TextField isError={userNameError} ErrorMessage="Enter a Username" placeholder="UserName" handleChange={onUserNamefieldChange} />
                    <br>
                    </br>
                    <TextField isError={emailError} ErrorMessage="Enter valid Email Id." placeholder="Email Id" handleChange={onTextfieldChange} />
                    <br>
                    </br>
                    <PasswordField isError={passwordError} ErrorMessage="Password should be alteast of 6 characters." handleChange={onPasswordfieldChange} />
                    <br></br>
                    <ButtonConatiner onClick={SignInClick} placeholder="Sign Up" />
                    <br>
                    </br>
                    <div>
                        <p><Link to="/">Already Have an Account,Sign In.</Link></p>
                    </div>

                </div>
            </div>
        </Zoom>

    );
}
export default RegestrationPageContainer;