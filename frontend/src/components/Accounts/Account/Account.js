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
                <Typography variant="body2">{moment(account.foundAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h6" gutterBottom>Username: {account.name}</Typography>
                <Typography className={classes.title} variant="h6" gutterBottom>Tagline: {account.tag}</Typography>
                <Typography className={classes.title} variant="h6" gutterBottom>Level: {account.account_level}</Typography>
            </CardContent>
            
        </Card>
    );
}

export default Account;