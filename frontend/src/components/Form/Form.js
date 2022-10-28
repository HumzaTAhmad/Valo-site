import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles.js';
import { useDispatch, useSelector } from 'react-redux';
import { postAccount, updateAccount } from '../../actions/accounts.js';


const Form = ({currentId, setCurrentId}) => {

    const classes = useStyles();
    const [accountData, setAccountData] = useState({
        name: '', 
        tag: '',
        region: ''
    });

    const account = useSelector((state) => currentId ? state.accounts.find((acc) => acc._id === currentId) : null);
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(account) setAccountData(account);
    }, [account])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateAccount(currentId, accountData));
        }else{
            dispatch(postAccount(accountData));
        }

        clear();
    }
    
    const clear = () => {
        setCurrentId(null)
        setAccountData({name: '', tag: '', region: '', account_level: '', foundAt: '', image: '', rank: '', rank_image: ''})
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography className={classes.valFont} variant="h6" fontWeight="bold">{currentId ? 'Editing' : 'Searching'} Valorant Account</Typography>
            <TextField
                className={classes.textField}
                name="username"
                variant="outlined"
                label="Username"
                fullWidth
                value={accountData.name}
                onChange={(e) => setAccountData({ ...accountData, name: e.target.value})}
            />
            <TextField
                className={classes.textField}
                name="tag"
                variant="outlined"
                label="Tag"
                fullWidth
                value={accountData.tag}
                onChange={(e) => setAccountData({ ...accountData, tag: e.target.value})}
            />
            <TextField
                className={classes.textField}
                name="region"
                variant="outlined"
                label="Region"
                fullWidth
                value={accountData.region}
                onChange={(e) => setAccountData({ ...accountData, region: e.target.value})}
            />
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;