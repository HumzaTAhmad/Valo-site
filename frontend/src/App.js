import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Accounts from './components/Accounts/Accounts.js';
import Form from './components/Form/Form.js'
import logo from './images/logo.png';

const App = () => {
    return (
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Valo-Site</Typography>
                <img src={logo} alt="valo-site" height="60" width="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid Container justify="space-between" alignItems="stretch" spacing={3}>
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
    );
}

export default App;