import React from 'react';
import Header from './Header';
import PortfolioHome from './PortfolioHome';
import PortfolioItem from './PortfolioItem';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={PortfolioHome} />
            <Route path="/story/:id" component={PortfolioItem} />
        </Switch>
    </BrowserRouter>
);

export default App;
