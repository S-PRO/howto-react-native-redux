/**
 * Created by igor on 08.06.16.
 */
import { combineReducers } from 'redux';
import {helloWorld} from './helloWorld';

const rootReducer = combineReducers({
    helloWorld
});

export default rootReducer;