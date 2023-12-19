import {configureStore} from "@reduxjs/toolkit"
import { countReducer } from "../Reducer";

const mystore=configureStore({
    reducer:{
        count:countReducer
    }
})

export default mystore;