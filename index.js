import { AppRegistry } from 'react-native';
import App from './src/App';
import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import reducer from './src/reducers/counterReducer';


const store = createStore(reducer);



const AppContainer=()=>{
    return (
    <Provider store={store}>
        <App />    
    </Provider>
    )

}

AppRegistry.registerComponent('udemyRedux', () => AppContainer);
