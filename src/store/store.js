import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from '../features/counter/counterSlice';
export default configureStore({
reducer:{
    counter:counterReducer
}  // Reducers will be added here
});

// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './features/counter/counterSlice'

// export default configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// })