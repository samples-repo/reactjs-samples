import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Resume from './Resume';
import Error from './Error';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                    <Redirect exact path='/' to='/about' />
                    <Route path='/about' component={About} />
                    <Route path='/resume' component={Resume} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/contact' component={Contact} />
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;