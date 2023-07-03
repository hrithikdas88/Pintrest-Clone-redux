import { configureStore  } from "@reduxjs/toolkit";
import photoReducer from '../store/PhotoSlice';
import FavoriteSlice from "./FavoriteSlice";
import ClickSlice from "./ClickSlice";


const store=configureStore({
    reducer:{
      photos:photoReducer,
      favorite:FavoriteSlice,
      click:ClickSlice
    }
})

export default store;