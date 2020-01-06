import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TestComponent } from 'test_bazel_build/test-example';

window.onload = () => {
    const rootElement = document.getElementById('root');
    ReactDOM.render(<TestComponent />, rootElement);
};