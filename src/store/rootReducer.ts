import { combineReducers } from '@reduxjs/toolkit';

import { flightsReducer } from '../flights/ducks/reducers';

export default combineReducers({ ...flightsReducer });
