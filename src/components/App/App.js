import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
// import NotFound from '../NotFound/NotFound';
// import Movie from '../Movie/Movie';

const App = () => {
    return (
        <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>
        </BrowserRouter>
    )
}

export default App