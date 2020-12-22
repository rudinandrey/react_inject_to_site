import React from 'react';
import ReactDOM from 'react-dom';


export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        );
    }
}

export {Button1} from './button';

export function mountAppComponent(element, domElement) {
    ReactDOM.render(React.createElement(element), domElement);
}


