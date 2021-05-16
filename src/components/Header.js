import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Home from '../assets/home.png';

const Header = () => {

    return (
        <Grid container justify="center" alignItems="center" style={{flex: 1, background: '#000', color: '#fff'}}>
            <Grid container justify="flex-start" alignItems="center" style={{padding: 5}}>
                <Link to='/'>
                    <img src={Home} alt="home" style={{height: 30, width: 30}}/>
                </Link>
            </Grid>
            <p style={{fontWeight: 'bold'}}>SELECT A STATE TO READ BENEFICIARY'S STORIES </p>
        </Grid>
            
    )
}

export default Header