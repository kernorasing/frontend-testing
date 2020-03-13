import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MyCars from '../../pages/my_cars/MyCars';
import History from '../../pages/history/History';
import Map from '../../pages/map/Map';

export default class Container extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <MyCars />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/map">
                        <Map />
                    </Route>
                </Switch>
            </Router>
        );
    }
}