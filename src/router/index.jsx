import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '@/components/home';

export default class RouterMap extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Redirect to='/' />
            </Switch>
        );
    }
}
