import {  applyMiddleware,  compose,createStore } from 'redux';


import rootReducer from './reducer';


export const configureStore = (initialState = {}) => {
   
    const devToolEnhancer =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    
    const composeEnhancers = devToolEnhancer || compose;
 const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware())
 
 )
 

    return store;
};
