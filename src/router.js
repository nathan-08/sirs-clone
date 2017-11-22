import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './home.js'
import About from './about.js'
import pAndE from './pricingAndEnrollment'
import RegulatoryRefences from './regulatoryReferences'
import SEArule from './SEArule'

export default (
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={About} path='/about'/>
        <Route component={pAndE} path='/PAE'/>
        <Route component={RegulatoryRefences} path='/references'/>
        <Route component={SEArule} path='/SEA'/>
    </Switch>
)