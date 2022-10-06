import React, { useState } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import { postAccount } from '../../actions/accounts.js';

const Form = () => {

    const classes = useStyles();
    const [accountData, setAccountData] = useState({
        username: '', 
        tag: ''
    });

    const dispatch = useDispatch()
    

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(postAccount(accountData));
    }
    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Search Valorant Account</Typography>
            <TextField
                name="username"
                variant="outlined"
                label="Username"
                fullWidth
                value={accountData.username}
                onChange={(e) => setAccountData({ ...accountData, username: e.target.value})}
            />
             <TextField
                name="tag"
                variant="outlined"
                label="Tag"
                fullWidth
                value={accountData.tag}
                onChange={(e) => setAccountData({ ...accountData, tag: e.target.value})}
            />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" oncClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;