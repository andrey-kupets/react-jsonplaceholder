import React, {Component} from 'react';

class Posts extends Component {

    state = {posts: []};

    componentDidMount() {
        const {userId} = this.props;
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then(value => value.json())
            .then(value => {
                this.setState({posts: value});
            });
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(value => <div key={value.id}>{value.title} - {value.body}<hr/></div>)
                }
            </div>
        );
    }
}

export default Posts;