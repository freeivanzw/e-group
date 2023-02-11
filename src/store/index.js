import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from './reducers/authReducer';
import {profileReducer} from './reducers/profileReducer';
import {userReducer} from './reducers/usersReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  users: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
window.store = store;