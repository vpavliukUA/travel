import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LocalesState, Locale } from '../../../interfaces';

const initialState: LocalesState = {
  data: null,
  loading: false,
  error: false,
};

const { reducer: availableLocalesReducer, actions } = createSlice({
  name: 'availableLocalesReducer',
  initialState,
  reducers: {
    getAvailableLocales: state => {
      state.data = null;
      state.loading = true;
      state.error = false;
    },
    setAvailableLocalesSuccess: (state, action: PayloadAction<Locale[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    },
    setAvailableLocalesError: state => {
      state.data = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export { actions };

export default availableLocalesReducer;
