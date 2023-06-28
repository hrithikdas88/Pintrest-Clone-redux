import { configureStore  } from "@reduxjs/toolkit";
import photoReducer from '../store/PhotoSlice';



const store=configureStore({
    reducer:{
      photos:photoReducer,
    }
})

export default store;