import * as React from 'react';
import { getCurrentTimeMillis } from 'test_bazel_build/test-library';

export class TestComponent extends React.Component {
    render() {
        return <button onClick={this.buttonClick} className="example-buton">Push me</button>;
    }

    private buttonClick = () => {
        alert(`Current time is ${getCurrentTimeMillis()}`);
    }
}
