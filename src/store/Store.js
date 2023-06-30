import { configureStore  } from "@reduxjs/toolkit";
import photoReducer from '../store/PhotoSlice';
import favReducer from "../store/FavoriteSlice"



const store=configureStore({
    reducer:{
      photos:photoReducer,
      favorite:favReducer
    }
})

export default store;