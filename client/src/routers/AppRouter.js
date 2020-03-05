import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import LoginViaSmsPage from '../components/LoginViaSmsPage';
import PersonalInfo from '../components/PersonalInfo';
import LoadingPage from '../components/LoadingPage';
import CoWorkers from '../components/CoWorkers';
import NotFoundPage from '../components/NotFoundPage';
import ProgressLine from '../components/ProgressLine';
import EnterPage from '../components/EnterPage';
import Evaluation1 from '../components/evaluation/Evaluation1';
import Evaluation2 from '../components/evaluation/Evaluation2';
import Evaluation3 from '../components/evaluation/Evaluation3';
// import test from '../components/CoWorkers/Type6';
import Main from '../components/CoWorkers/Main';


 const AppRouter = () => (
     <BrowserRouter>
        <div  className="main_container">
            <Header />
            <Switch>
                <Route path="/" component={LoginViaSmsPage} exact={true} />
                <Route path="/01" component={PersonalInfo} />
                <Route path="/02" component={Main}  />
                <Route path="/03" component={CoWorkers}  />
                <Route path="/home" component={EnterPage}  />
                <Route path="/05" component={Evaluation1}  />
                <Route path="/06" component={Evaluation2}  />
                <Route path="/07" component={Evaluation3}  />
                {/* <Route path="/test" component={test} /> */}
                <Route component={NotFoundPage} />
            </Switch>
            <ProgressLine />
        </div>
     </BrowserRouter>
 );

export default AppRouter;