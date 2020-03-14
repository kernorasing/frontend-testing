import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import MyCars from '../../pages/my_cars/MyCars';
import History from '../../pages/history/History';
import Map from '../../pages/map/Map';

export default class Container extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/mycar">
                        <MyCars />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/map">
                        <Map />
                    </Route>
                    <Redirect from="/" to="/mycar" />
                    <Redirect from="*" to="/mycar" />
                </Switch>
            </Router>
        );
    }
}