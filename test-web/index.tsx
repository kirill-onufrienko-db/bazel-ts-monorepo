import './env';
import * as ReactDOM from 'react-dom';
import app from './app';

window.onload = () => {
    const styles = document.createElement('link');
    styles.setAttribute('rel', 'stylesheet');
    styles.setAttribute('type', 'text/css');
    styles.setAttribute('href', 'index.css');
    document.head.appendChild(styles);
    const rootElement = document.createElement('div');
    rootElement.setAttribute('id', 'root');
    document.body.appendChild(rootElement);
    ReactDOM.render(app, rootElement);
};