import React, {Component} from 'react';
import './App.css';
import AllUsers from "./components/all-users/AllUsers";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={'/users'}>users</Link><br/>
                    <hr/>
                        <Route path={'/users'} render={() => {
                            return <AllUsers/>;
                        }}/>
                    <hr/>
                </div>
            </Router>
        );
    }
}

export default App;
