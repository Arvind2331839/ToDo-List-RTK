// import {createSlice,nanoid} from "@reduxjs/toolkit";

// const initialState={
//     todos:[{id:1, text:'Hello world'}]
// }


//   export const todoSlice= createSlice({
//     name:"todo",
//     initialState,
//     reducers:{
//         addTodo: (state,action) => {
//             id:nanoid()
//             text:action.payload
//         },
//         removeTodo: (state,action) => {},
//     }
// }) 

// export const{addTodo,removeTodo}=todoSlice.actions
import { createSlice } from '@reduxjs/toolkit'
export const toDoSlider = createSlice({
  name: 'toDo',
  initialState: {
    todoList:   [
      { id: 1, content: "Arvind Kumar", },
      { id: 2, content: "Prakash Mishra"}
    ]
  },
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: Date.now(),
        content: action.payload.newContent
      }
      state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => 
          item.id !==action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) => 
        item.id === action.payload.id ? action.payload : item);
    }
   },
 })// Action creators are generated for each case reducer function
 export const { addToDo, deleteToDo, editTodo } = toDoSlider.actions
 export default toDoSlider.reducer;