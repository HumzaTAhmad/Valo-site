import React from 'react';
import Account from './Account/Account.js'
import useStyles from './styles.js';

const Accounts = () => {

    const classes = useStyles();

    return (
        <>
            <h1>Accounts</h1>
            <Account />
            <Account />
        
        </>
    );
}

export default Accounts;