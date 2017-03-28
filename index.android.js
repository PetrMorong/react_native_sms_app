import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import store from './app/Store';
import Root from './app/Root';


class app extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('app', () => app);

