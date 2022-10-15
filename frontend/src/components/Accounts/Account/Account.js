import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles.js';

const Account = ({account}) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={account.image} title={account.name}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{account.name}</Typography>
                
            </div>
        </Card>
    );
}

export default Account;