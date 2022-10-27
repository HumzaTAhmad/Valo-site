import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { getAccounts } from './actions/accounts.js';
import Accounts from './components/Accounts/Accounts.js';
import Form from './components/Form/Form.js'
import logo from './images/logo.png';
import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAccounts());
    }, [dispatch]);

 

    return (
        <>
            <head>
                <link href="http://fonts.cdnfonts.com/css/valorant" rel="stylesheet"/>
            </head>
            <Container maxidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                
                    <Typography className={classes.heading} variant="h2" align="center">Valo-Site</Typography>
                
                    <img className={classes.image} src={logo} alt="valo-site" height="60" width="60" />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid Container className={classes.box} justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Accounts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    );
}

export default App;