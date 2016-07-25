import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function SmartHomeReducer(state = initialState, action) {
    switch (action.type) {
        case types.SubscriptionStatusChanged:
            return Object.assign({}, state, {
                isSubscribed: action.status
            });
        case types.UserLoggedInStatusChanged:
            return Object.assign({}, state, {
                user: action.user
            });
        default:
            return state;
    }
};