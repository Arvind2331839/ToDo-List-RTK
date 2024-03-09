// import { ConfigureStore, configureStore} from "@reduxjs/toolkit";

// export const store=configureStore({ })

import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from '../features/todo/toDoSlider';
export default configureStore({
 reducer: {// allows you create n number of sliders
     toDo: toDoReducer
  ,
}
})