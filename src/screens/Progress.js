import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import classes from '../styles/BackgroundVideo.module.css';
import animationData from '../assets/teen-walking.json'

const Progress = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className={classes.Container}>
            
            <div className={classes.Content} style={{background: '#fff'}}>
                <div className={classes.SubContent} >
                    <Grid direction="row" container justify="flex-end" alignItems="center">
                        <Grid style={{cursor: 'pointer'}}>
                            <Link to='/home'>
                                <Lottie options={defaultOptions}
                                    height={200}
                                    width={200}
                                />
                                <p style={{color: '#000', fontWeight: 'bold', fontSize: 12}}>Touch to Progress</p>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Progress