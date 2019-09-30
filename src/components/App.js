import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Main from './pages/home/Main';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import ContactUsPage from './pages/contactUs/ContactUsPage';
import AboutPage from './pages/about/AboutPage';

const App = () => {
    return(         
        <BrowserRouter>              
            <Header />  
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/contactus" component={ContactUsPage} />
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;