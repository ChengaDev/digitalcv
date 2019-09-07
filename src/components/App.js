import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import Main from '../pages/home/Main';

const App = () => {
    return(         
        <BrowserRouter>            
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;