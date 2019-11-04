import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Events from './components/pages/events'
import Header from './components/header'
import Home from './components/pages/home'
import PageContentContainer from "./components/pages/page-content-container";
import Plex from "./components/pages/plex";

import './styles/app.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Route component={ Header }/>
                <PageContentContainer>
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/events" component={ Events } />
                        <Route path="/plex" component={ Plex } />
                    </Switch>
                </PageContentContainer>
            </Router>
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);