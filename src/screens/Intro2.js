import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import classes from '../styles/BackgroundVideo.module.css';
import animationData from '../assets/next-button.json'

const Landing = () => {

    const videoSource = "assets/video/Untitled2.mp4"

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                <source src={videoSource} type="video/mov" />
                Your browser does not support the video tag.
            </video>

            

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                <Grid style={{flex: 1}} container>
                    <Grid container direction="column"  justify="flex-start" alignItems="center">
                        <p style={{color: '#fff', textAlign: 'right', maxWidth: 300}}>The initiative was launched in Nigeria on March 27, 2003, to provide access to entrepreneurship training, business development services as well as business start-up capital for youth-owned businesses.</p>
                    </Grid>
                    <Grid direction="row" container justify="flex-end" alignItems="center">
                        <Grid style={{cursor: 'pointer'}}>
                            <Link to='/progress'>
                                <Lottie options={defaultOptions}
                                    height={100}
                                    width={100}
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                </div>
            </div>
        </div>
    )
}

export default Landing