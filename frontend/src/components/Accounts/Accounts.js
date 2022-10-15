import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core'
import { useSelector } from 'react-redux';

import Account from './Account/Account.js'
import useStyles from './styles.js';

const Accounts = () => {
    const accounts = useSelector((state) => state.accounts)
    const classes = useStyles();

    console.log(accounts);

    return (
        //if acccounts length is zero then its true that we show a loader
       !accounts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {accounts.map((account) => (
                    <Grid key={account._id} item xs={12} sm={6}>
                        <Account account={account} />
                    </Grid>
                ))}
            </Grid>
       )
    );
}

export default Accounts;