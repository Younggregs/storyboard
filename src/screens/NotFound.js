import React from 'react';
import Grid from '@material-ui/core/Grid';
import classes from '../styles/BackgroundVideo.module.css';

const NotFound = () => {

    return (
        <div className={classes.Container} >
            
            

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                <Grid style={{flex: 1}} container>
                    <p>Sorry this page does not exist!</p>
                </Grid>
                </div>
            </div>
        </div>
    )
}

export default NotFound