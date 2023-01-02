import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchCount2} from "./counter2API"

const initialState = {
    value: 0,
    status: 'idle'
}

export const incrementAsync = createAsyncThunk(
    'counter2/fetchCount',
    async (amount) => {
      const response = await fetchCount2(amount);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    }
  );


export const counter2Slice = createSlice({
    name: "counter2",
    initialState,
    reducers: {
        increment: (state)=>{
            console.log();
            state.value +=1;
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        incrementByAmount: (state, action)=>{
            state.value += action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
          .addCase(incrementAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value += action.payload;
          });
      },
})


export const selectCount2 = (state)=> state.counter2.value;
export const {increment, decrement, incrementByAmount} = counter2Slice.actions;

export const incrementIfOdd= (amount)=>(dispatch, getState)=>{
    // console.log(getState().counter2.value);
    const currentValue = getState().counter2.value;
    if(currentValue % 2 !== 0){
        dispatch(incrementByAmount(amount))
    }
}

export default counter2Slice.reducer;