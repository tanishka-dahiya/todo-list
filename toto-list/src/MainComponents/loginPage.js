import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './todo.css';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: '30px',

    },
    root: {
        '& > *': {
            margin: theme.spacing(2.5),
            width: '30ch'
        },
    },
}));
function LoginPageContainer({ addTask }) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (


        <div id="formContent">
            <div className="signinContainer">
                <h2>Sign In</h2>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="UserName" variant="outlined" />
                    <br></br>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                </form>
                <div>
                    <Button className={classes.button} variant="contained" color="primary">
                        Sign In
      </Button>
                    <br>
                    </br>
                </div>
                <div>
                    <p>Already have an Account</p>
                </div>

            </div>
            <div className="signupContainer">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpeAoszktrQnVN1ORlXS9Oqz7OkOYziI83pA5GUuxaZVPo2wi_&usqp=CAU" />
            </div>


        </div >


    );
}
export default LoginPageContainer;