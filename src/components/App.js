import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Main from '../pages/Main';

const App = () => {
    return(         
        <BrowserRouter>
            <Route path="/" component={Main} />
            <Switch>
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;