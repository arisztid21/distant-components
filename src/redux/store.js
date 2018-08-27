import {createStore} from 'redux';

const initialState={
    loggedInAs: '$$$$$$$$',
    isCreaditCardHolder: false
};

const reducer = state => state

const store = createStore(reducer, initialState);

export default store;