import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import classes from '../styles/BackgroundVideo.module.css';
import animationData from '../assets/go.json';
import Divider from '@material-ui/core/Divider';
import Lagos from '../assets/lagos.jpg';
import PH from '../assets/ph.gif';
import Kano from '../assets/kano.jpeg';
import Header from '../components/Header'

const Home2 = () => {

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
            <Header />
            <Grid container justify="center" alignItems="center" style={{flex: 3, backgroundImage: `url(${Lagos})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: 0.5}}>
                <Grid container direction="column" justify="center" alignItems="center" style={{background: '#006400', width: 300, height: 80, borderStyle: 'solid', borderWidth: '2px', borderColor: '#fff', borderRadius: 10}}>
                    <Link to='/home1' style={{textDecoration: 'none'}}>
                        <p style={{color: '#fff'}}>LAGOS</p>
                            <Lottie style={{transform: `rotate(90deg)`}} options={defaultOptions}
                                height={50}
                                width={50}
                            />
                    </Link>
                </Grid>
            </Grid>
            <Divider />
            <Grid container justify="center" alignItems="center" style={{flex: 6, backgroundImage: `url(${PH})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <Grid container direction="column" justify="center" alignItems="center" style={{background: '#800000', width: 300, height: 80, borderStyle: 'solid', borderWidth: '2px', borderColor: '#fff', borderRadius: 10}}>
                    <p style={{color: '#fff'}}>
                        PORT HARCOURT
                        <br />
                        <span>The land of natural resources</span>
                    </p>
                        <Lottie options={defaultOptions}
                            height={50}
                            width={50}
                        />
                </Grid>
            </Grid>
            <Divider />
            <Grid container justify="center" alignItems="center" style={{flex: 3, backgroundImage: `url(${Kano})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', opacity: 0.5}}>
            <Grid container direction="column" justify="center" alignItems="center" style={{background: '#191970', width: 300, height: 80, borderStyle: 'solid', borderWidth: '2px', borderColor: '#fff', borderRadius: 10}}>
                <Link to='/home3' style={{textDecoration: 'none'}}>
                    <p style={{color: '#fff'}}>KANO</p>
                        <Lottie style={{transform: `rotate(90deg)`}} options={defaultOptions}
                            height={50}
                            width={50}
                        />
                </Link>
            </Grid>
            </Grid>
        </Grid>
            
    )
}

export default Home2