import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class User extends Component {
    render() {
        const {item, match: {url}} = this.props;
        return (
            <div>
                {/*{item.id} - {item.name} - <Link to={`/users/${item.id}`}>user info</Link>*/}
                {item.id} - {item.name} - <Link to={`${url}/${item.id}`}>info</Link>
            </div>
        );
    }
}

export default withRouter(User);
