import React from 'react';
import PortfolioHome from './PortfolioHome';
import PortfolioItem from './PortfolioItem';
import NotFound from './NotFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <div className="container-fluid">
            <Switch>
                <Route exact path={['/story/:id', '/bookmarks/build/story/:id']} component={PortfolioItem} />
                <Route exact path={['/', '/bookmarks/build/']} component={PortfolioHome} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
