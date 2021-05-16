import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './screens/Landing'
import Intro1 from './screens/Intro1'
import Intro2 from './screens/Intro2'
import Progress from './screens/Progress'
import Home from './screens/Home'
import Home1 from './screens/Home1'
import Home2 from './screens/Home2'
import Home3 from './screens/Home3'
import NotFound from './screens/NotFound'

/* 
import loadable from '@loadable/component'
import Loading from './components/Loading';

Authentication pages begins here
const Landing = loadable(() => import('./screens/Landing'), {
    fallback: Loading,
})
const Intro1 = loadable(() => import('./screens/Intro1'), {
    fallback: Loading,
})
const Intro2 = loadable(() => import('./screens/Intro2'), {
    fallback: Loading,
})
const Progress = loadable(() => import('./screens/Progress'), {
    fallback: Loading,
})
const Home = loadable(() => import('./screens/Home'), {
    fallback: Loading,
})
const NotFound = loadable(() => import('./screens/NotFound'), {
    fallback: Loading,
})

*/



export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route 
                        exact 
                        path="/" 
                        component={Landing}/>
                    <Route 
                        exact 
                        path="/intro1" 
                        component={Intro1}/>
                    <Route 
                        exact 
                        path="/intro2" 
                        component={Intro2}/>
                    <Route 
                        exact 
                        path="/progress" 
                        component={Progress}/>
                    <Route 
                        exact 
                        path="/home" 
                        component={Home}/>
                    <Route 
                        exact 
                        path="/home1" 
                        component={Home1}/>
                    <Route 
                        exact 
                        path="/home2" 
                        component={Home2}/>
                    <Route 
                        exact 
                        path="/home3" 
                        component={Home3}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}