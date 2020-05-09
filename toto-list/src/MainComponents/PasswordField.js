import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './todo.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: '30ch'
        },
    },
}));

function PasswordField({ handleChange, isError, ErrorMessage }) {
    const classes = useStyles();

    if (isError) {
        return (
            <form className={classes.root}>
                <TextField
                    error
                    id="outlined-basic" label="Password" variant="outlined"
                    helperText={ErrorMessage}
                    onChange={handleChange}
                />
            </form>)

    }
    else {
        return (
            <form className={classes.root}>
                <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handleChange} /></form>
        )
    }

}
export default PasswordField;