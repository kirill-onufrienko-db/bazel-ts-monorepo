import './env';
import * as ReactDOM from 'react-dom';
import app from './app';

window.onload = () => {
    const rootElement = document.createElement('div');
    rootElement.setAttribute("id", "root");
    document.body.appendChild(rootElement);
    ReactDOM.render(app, rootElement);
};