import { configureStore } from '@reduxjs/toolkit'
// can keep any name of reduces
import  counterReducer  from '../features/counter/counterSlice';
import counterNewReducer from '../features/counter/counterSlicenew';

export default configureStore({
reducer:{
    counter:counterReducer,
    counternew:counterNewReducer,

}  // Reducers will be added here
});

// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './features/counter/counterSlice'

// export default configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// })