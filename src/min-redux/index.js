import store from './store/store'
import {addNote} from "./actions/actions"
import Title from './components/title'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
ReactDOM.render(<Title />, document.getElementById('root'));


function returnReduxProvider(){
    return <Provider store={store}>
    <Title />
    </Provider>
}