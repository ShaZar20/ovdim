import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import LoginViaSmsPage from '../components/LoginViaSmsPage';
import PersonalInfo from '../components/PersonalInfo';
import NotFoundPage from '../components/NotFoundPage';
import ProgressLine from '../components/ProgressLine';
import EnterPage from '../components/EnterPage';
import Main from '../components/CoWorkers/Main';
import Questions from '../components/Questions';
import Final from '../components/Finalpage'

 const AppRouter = () => (
     <BrowserRouter>
        <div  className="main_container">
            <Header />
            <Switch>
                <Route exact={true} path="/" component={LoginViaSmsPage}  />
                <Route exact={true} path="/01" component={PersonalInfo} />
                <Route exact={true} path="/02" component={Main}  />
                <Route exact={true} path="/main" component={Questions}  />
                <Route exact={true} path="/home" component={EnterPage}  />
                <Route exact={true} path="/done" component={Final}  />
                <Route component={NotFoundPage} />
            </Switch>
            <ProgressLine />
        </div>
     </BrowserRouter>
 );

export default AppRouter;