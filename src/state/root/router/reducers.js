import { combineReducers } from 'redux';

import { ROUTE_DIRECTORY } from '../../../constants/routes';

import {
  ROUTE_CHANGE,
  CHROME_INSTALLLED_CHANGE,
} from '../../../constants/actions';

import { isChromeInstalled } from '../../../senders/generic';

const previousRoute = (state = null, action) => {
  switch (action.type) {
    case ROUTE_CHANGE: return action.previousRoute;
    default: return state;
  }
};

const route = (state = ROUTE_DIRECTORY, action) => {
  switch (action.type) {
    case ROUTE_CHANGE: return action.route;
    default: return state;
  }
};

const chromeInstalled = (state = isChromeInstalled(), action) => {
  switch (action.type) {
    case CHROME_INSTALLLED_CHANGE: return action.chromeInstalled;
    default: return state;
  }
};

export default combineReducers({
  previousRoute,
  route,
  chromeInstalled,
});
