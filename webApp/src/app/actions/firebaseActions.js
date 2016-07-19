import * as types from '../constants/actionTypes';
import ApiUtils from '../utils/ApiUtils';

export function onSubscribtionChange(status) {
    return {
        type: types.SubscriptionStatusChanged,
        status: status
    };
}

