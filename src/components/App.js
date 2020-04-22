import React from 'react';
import Header from './Header';
import PortfolioHome from './PortfolioHome';
import PortfolioItem from './PortfolioItem';
import NotFound from './NotFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path={['/story/:id', '/bookmarks/build/story/:id']} component={PortfolioItem} />
            <Route exact path={['/', '/bookmarks/build/']} component={PortfolioHome} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;
