import React from 'react';
import { useSelector } from 'react-redux';

import Account from './Account/Account.js'
import useStyles from './styles.js';

const Accounts = () => {
    const accounts = useSelector((state) => state.accounts)
    const classes = useStyles();

    console.log(accounts);

    return (
        <>
            <h1>Accounts</h1>
            <Account />
            <Account />
        
        </>
    );
}

export default Accounts;