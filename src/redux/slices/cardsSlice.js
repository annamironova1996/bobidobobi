import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCards = createAsyncThunk('cards/fetchCardsById', async () => {
    const { data } = await axios.get('http://localhost:3005/products');
    return data;
});

const initialState = {
    items: [],
    status: 'loading',
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCards(state, action) {
            state.items = action.payload.data;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCards.pending, (state, action) => {
            state.status = 'loading';
            state.items = [];
        });
        builder.addCase(fetchCards.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchCards.rejected, (state, action) => {
            state.status = 'error';
            state.items = [];
        });
    },
});

export const selectCardSliceStatus = (state) => state.cardsSlice.status;

export const selectCardSliceItems = (state) => state.cardsSlice.items;

export const { setCards } = cardsSlice.actions;

export default cardsSlice.reducer;
