import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './reducers/authReducer';
import {profileReducer} from './reducers/profileReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.store = store;