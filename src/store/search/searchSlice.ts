import { createSlice } from '@reduxjs/toolkit';
import { Item, PropsInitialState } from '../../types';

const initialState:PropsInitialState = {
  loading: false,
  items: [],
  categories: []
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLoading: (state, { payload }: { payload: boolean }) => {
      state.loading = payload;
    },
    setItems: (state, { payload }: { payload: Item[] }) => {
      state.items = payload;
    },
    setCategories: (state, { payload }: { payload: string[] }) => {
      state.categories = payload;
    }
  }
});

export const {
  setLoading,
  setItems,
  setCategories
} = searchSlice.actions;