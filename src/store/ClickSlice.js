import { createSlice } from '@reduxjs/toolkit';

const ClickSlice = createSlice({
  name: 'click',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const photoId = action.payload;
      if (!state.includes(photoId)) {
        state.push(photoId);
      }
    },
    removeFromFavorites: (state, action) => {
      const photoId = action.payload;
      
       return state.filter((id) => id !== photoId);

    },
  },
});

export const { addToFavorites, removeFromFavorites } = ClickSlice.actions;
export default ClickSlice.reducer;
