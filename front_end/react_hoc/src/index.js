import React, {Component} from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class PostService {
    static get posts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data); 
    }
}

const MyComponent = ({posts}) => {
    return <div>Howdy! 😃</div>;
};

const withData = (WrappedComponent) => {
    return class extends Component {
        constructor() {
            super();
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
};

const App = () => {
    const Posts = withData(MyComponent)
    return (
        <div>
            <Posts/>
        </div>
    );
}

render(<App/>, document.getElementById('index'))

