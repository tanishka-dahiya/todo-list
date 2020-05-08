import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0.1),
        },
    },
}));

function ButtonConatiner({ onClick, placeholder }) {
    const classes = useStyles();
    return (
        <div className={classes.root}><Button onClick={onClick} variant="contained" color="primary">
            {placeholder}
        </Button>
        </div>)
}
export default ButtonConatiner;