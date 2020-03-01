import React from 'react';
import Header from './Header';
import LoginViaSmsPage from './LoginViaSmsPage';
import EnterPage from './EnterPage';
import LoadingPage from './LoadingPage';

export default class Robin extends React.Component {
    render() {
        return (
            <div className="main_container">
                <Header />
                <LoginViaSmsPage />
                {/* <LoadingPage />
                <EnterPage /> */}
            </div>
        );
    }
}


