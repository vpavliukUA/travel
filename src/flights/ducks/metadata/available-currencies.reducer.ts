import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrenciesState, Currency } from '../../../interfaces';

const initialState: CurrenciesState = {
  data: null,
  loading: false,
  error: false,
};

const { reducer: availableCurrenciesReducer, actions } = createSlice({
  name: 'availableCurrenciesReducer',
  initialState,
  reducers: {
    getAvailableCurrencies: state => {
      state.data = null;
      state.loading = true;
      state.error = false;
    },
    setAvailableCurrenciesSuccess: (state, action: PayloadAction<Currency[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    setAvailableCurrenciesError: state => {
      state.data = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export { actions };

export default availableCurrenciesReducer;
