import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

// action creator
// return a function instead of an object, a different value type
// can return action object OR function
export const signup = (formProps, callback) => async dispatch => {
        // as function, dispatch as many actions as we 
        // want with single action creator, control dispatch process
        // power of redux thunk, alternative to async action creators
        // difference than redux promise, one action with promise, limited 
        try {
                const response = await axios.post('https://auth-base.herokuapp.com/signup', formProps);
                dispatch({ type: AUTH_USER, payload: response.data.token });
                localStorage.setItem('user', response.data.token );
                callback();
        } catch(err) {
                // run if anything goes wrong
                dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
        }
};

export const signout = () => {
        // normal synchronous action creator, no need async dispatch
        localStorage.removeItem('user');

        return {
                type: AUTH_USER,
                payload: ''
        };
};

export const signin = (formProps, callback) => async dispatch => {
        try {
                const response = await axios.post('https://auth-base.herokuapp.com/signin', formProps);
                dispatch({ type: AUTH_USER, payload: response.data.token });
                localStorage.setItem('user', response.data.token );
                callback();
        } catch(err) {
                // run if anything goes wrong
                dispatch({ type: AUTH_ERROR, payload: 'Invalid login' });
        }
};