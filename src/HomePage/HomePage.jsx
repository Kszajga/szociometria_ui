import React from 'react';
import { BrowserRouter, Link, Switch, Router, Route } from 'react-router-dom';
import { PrivateRoute } from './../_components/PrivateRoutes';
import { history } from './../_helpers/history';
import { connect } from 'react-redux';
import { userActions } from './../_actions/user.actions';
import { QuestionnairePage } from './../_pages/QuestionnairePage/QuestionnairePage';
import { NavBar } from './../_components/NavBar';


class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">

                {users.loading && <em>Loading users...</em>}
                {users.errors && users.errors.map((error, index) => <span className="text-danger">ERROR: {error.message}</span>)}
                {users.admins &&
                    <ul>
                        {users.admins.map((user, index) =>
                            <li key={user.id}>
                                {user.name}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;

    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };