import * as ReactDOM from 'react-dom';
import app from './app';

window.onload = () => {
    const rootElement = document.getElementById('root');
    ReactDOM.render(app, rootElement);
};