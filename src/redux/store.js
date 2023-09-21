import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import cardsSlice from './slices/cardsSlice';

export const store = configureStore({
    reducer: {
        cartSlice,
        cardsSlice,
    },
});
