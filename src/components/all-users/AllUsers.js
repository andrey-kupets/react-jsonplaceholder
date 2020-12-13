import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "../user/User";
import './AllUsers.css';
import {
    BrowserRouter as Router,  // left as a template
    Switch,            // left as a template
    Route,
    Link,          // left as a template
    withRouter
} from "react-router-dom";
import FullUser from "../full_user/FullUser";

class AllUsers extends Component {
    state = {users: []};
    userService = new UserService;

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users});
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props; // for 1st case route
        return (
            <div>
                {users.map(value => <User item={value} key={value.id}/>)}
                <div className={'nest'}>
                    {/*<Switch>*/}
                    {/*<Route path={'/users/:id'} render={(props) => {*/}
                    <Route path={url + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props;
                        return <FullUser userId={id} key={id}/>;
                    }}/>
                    {/*</Switch>*/}
                </div>
            </div>
        );
    }
}

export default withRouter(AllUsers);