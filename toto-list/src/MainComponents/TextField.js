import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './todo.css';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(.5),
            width: '30ch'
        },
    },
}));

function TextFieldContainer({ handleChange, placeholder, isError, ErrorMessage }) {
    const classes = useStyles();
    if (isError) {
        return (
            <form className={classes.root}>
                <TextField
                    error
                    id="outlined-error-helper-text"
                    label={placeholder}
                    helperText={ErrorMessage}
                    variant="outlined"
                    onChange={handleChange}
                />
            </form>
        )
    }
    else {
        return (
            <form className={classes.root}>
                <TextField id="outlined-basic" label={placeholder} variant="outlined"
                    onChange={handleChange} />
            </form>
        );
    }

}
export default TextFieldContainer;