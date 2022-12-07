import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const userSettingsState={
    darkMode:false,
    billingAddress:'',
    shippingAddress:'',
    state:'',
    zip:0,
    email:'',
    cell:0,
    status:'',
    orders:[]
}

const userSettingsSlice= createSlice({
    name:'useSettings',
    initialState:userSettingsState,
    reducers:{
        deleteUser:(state,action)=>{
            
        }
    }
})

export default userSettingsSlice.reducer