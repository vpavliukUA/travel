import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CountriesState, Country } from '../../../interfaces';

const initialState: CountriesState = {
  data: null,
  loading: false,
  error: false,
};

const { reducer: availableCountriesReducer, actions } = createSlice({
  name: 'availableCountriesReducer',
  initialState,
  reducers: {
    getAvailableCountries: state => {
      state.data = null;
      state.loading = true;
      state.error = false;
    },
    setAvailableCountriesSuccess: (state, action: PayloadAction<Country[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    setAvailableCountriesError: state => {
      state.data = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export { actions };

export default availableCountriesReducer;
