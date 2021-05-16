import React from 'react';
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import classes from '../styles/BackgroundVideo.module.css';
import animationData from '../assets/go.json';
import Divider from '@material-ui/core/Divider';
import Lagos from '../assets/lagos.jpg';
import PH from '../assets/ph.jpeg';
import Kano from '../assets/kano.jpeg';

const Home = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column" style={{flex: 1}} className={classes.Container}>
            <Grid container justify="center" alignItems="center" style={{flex: 1, background: '#000', color: '#fff'}}>
                <p style={{fontWeight: 'bold'}}>SELECT A STATE TO READ BENEFICIARY'S STORIES </p>
            </Grid>
            <Grid container justify="center" alignItems="center" style={{flex: 3, backgroundImage: `url(${Lagos})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: 0.5}}>
                <Grid container direction="column" justify="center" alignItems="center" style={{background: '#006400', width: 300, height: 80, borderStyle: 'solid', borderWidth: '2px', borderColor: '#fff', borderRadius: 10}}>
                    <p style={{color: '#fff'}}>LAGOS</p>
                        <Lottie options={defaultOptions}
                            height={50}
                            width={50}
                        />
                </Grid>
            </Grid>
            <Divider />
            <Grid container justify="center" alignItems="center" style={{flex: 3, backgroundImage: `url(${PH})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: 0.5}}>
            <Grid container direction="column" justify="center" alignItems="center" style={{background: '#800000', width: 300, height: 80, borderStyle: 'solid', borderWidth: '2px', borderColor: '#fff', borderRadius: 10}}>
                    <p style={{color: '#fff'}}>PORT HARCOURT</p>
                        <Lottie options={defaultOptions}
                            height={50}
                            width={50}
                        />
                </Grid>
            </Grid>
            <Divider />
            <Grid container justify="center" alignItems="center" style={{flex: 3, backgroundImage: `url(${Kano})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: 0.5}}>
            <Grid container direction="column" justify="center" alignItems="center" style={{background: '#191970', width: 300, height: 80, borderStyle: 'solid', borderWidth: '2px', borderColor: '#fff', borderRadius: 10}}>
                    <p style={{color: '#fff'}}>KANO</p>
                        <Lottie options={defaultOptions}
                            height={50}
                            width={50}
                        />
                </Grid>
            </Grid>
        </Grid>
            
    )
}

export default Home