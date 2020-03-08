import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './_helpers/history';
import { alertActions } from './_actions/alert.actions';
import { PrivateRoute } from './_components/PrivateRoutes';
import { HomePage } from './HomePage/HomePage';
import { LoginPage } from './LoginPage/LoginPage';
import { NavBar } from './_components/NavBar';
import { QuestionnairePage } from './_pages/QuestionnairePage/QuestionnairePage';
import { StudentPage } from './_pages/StudentPage/StudentPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    
    render() {
        const { alert, users } = this.props;
        const loggedInUser = localStorage.getItem('user');
        let displayNavBar;
        if (loggedInUser) {
            displayNavBar = <NavBar />;
        }
        return (
            // <div className="jumbotron">
            //     <div className="container">
            //         <div className="col-sm-8 col-sm-offset-2">
            //             {alert.errors &&
            //                 alert.errors.map((error, index) => <div key={index} className={`alert ${alert.type}`}>{error.message}</div>)
            //             }
            <div>
                {displayNavBar}
                <BrowserRouter history={history}>
                    <PrivateRoute exact path="/" component={HomePage} />
                    <PrivateRoute exact path="/questionnaires" component={QuestionnairePage} />
                    <PrivateRoute exact path="/students" component={StudentPage} />
                    <Route path="/login" component={LoginPage} />
                </BrowserRouter>
            </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps -> state", state)
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };