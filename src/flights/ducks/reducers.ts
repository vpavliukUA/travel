import { combineReducers } from '@reduxjs/toolkit';

import availableCountriesReducer from './metadata/available-countries.reducer';
import availableCurrenciesReducer from './metadata/available-currencies.reducer';
import availableLocalesReducer from './metadata/available-locales.reducer';

export const flightsReducer = {
  metadata: combineReducers({
    countries: availableCountriesReducer,
    currencies: availableCurrenciesReducer,
    locales: availableLocalesReducer,
  }),
};
