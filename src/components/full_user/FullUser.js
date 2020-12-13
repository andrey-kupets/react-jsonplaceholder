import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Posts from "../posts/Posts";


class FullUser extends Component {

    state = {user: null};
    userService = new UserService(); // both () or not () --- act

    async componentDidMount() {
        // let {id} = this.props; 1st case all users
        // const {userId} = this.props;
        const {match: {params:{id}}} = this.props;
        const user = await this.userService.getUser(id);
        this.setState({user});
    }

    render() {
        const {user} = this.state;
        const {match: {url}, userId} = this.props;

        return (
            <div>
                {user && <div>{user.id} - {user.name} - {user.username} - {user.email} - <Link to={url + '/posts'}>show user' posts</Link></div>}
                <Route path={url + '/posts'} render={() => <Posts userId={userId} key={userId}/>}/>
            </div>
        );
    }
}

export default withRouter(FullUser);