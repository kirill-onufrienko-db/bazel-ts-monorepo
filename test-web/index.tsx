import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { second_level_example } from 'test_bazel_build/test-example';

class TestComponent extends React.Component {
    render() {
        return (<button>Push me</button>);
    }
} 

const rootElement = document.getElementById('root');
ReactDOM.render(<TestComponent />, rootElement);