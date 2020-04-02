import {createStore,applyMiddleware} from 'redux';
import rootreducer from '../reducers/reducers'
//import nameAndTittle from '../middleware/nameAndTittle'
export default createStore(rootreducer)