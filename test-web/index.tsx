import * as React from 'react';
import * as ReactDom from 'react-dom';

import { second_level_example } from 'test_bazel_build/test-example';

class TestComponent extends React.Component {
    render() {
        return (<button>Push me</button>);
    }
} 

const rootElement = document.getElementById('root');
ReactDom.render(<TestComponent />, rootElement);