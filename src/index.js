import React from 'react';
import ReactDOM from 'react-dom';
import Button1 from "./button";


export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
            </div>
        );
    }
}

export function mountAppComponent(element, domElement) {
    ReactDOM.render(React.createElement(element), domElement);
}


export {Button1 as Button1};