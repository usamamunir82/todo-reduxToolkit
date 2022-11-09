import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      firstName: "todo1",
      lastName:"munir",
      email:"usamamunir882@gmail.com",
      completed: false,
    },
    {
      id: 2,
      firstName: "todo2",
      lastName:"munir",
      email:"usamamunir882@gmail.com",
      completed: true,
    },
    {
      id: 3,
      firstName: "todo3",
      lastName:"munir",
      email:"usamamunir882@gmail.com",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        firstName: action.payload.firstName,
        lastName:action.payload.lastName,
        email:action.payload.email,
        completed: false,
      };
      console.log("abcx",newTodo)
      state.push(newTodo);
    },
    toogleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    removeTodo:(state,action)=>{
        const {id}=action.payload
        console.log(state)
        return state.filter(todo=>todo.id!==id)
    },
    updateTodo:(state,action)=>{
// const {id}=action.payload;
// const {updatedtitle}=action.payload;
const index = state.findIndex((todo) => todo.id === action.payload.id);
state[index].firstName=action.payload.firstName
state[index].lastName=action.payload.lastName
state[index].email=action.payload.email



// if(state.id===id){
//     state.title=updatedtitle
// }



    }
  },
});
export const { addTodo,toogleComplete , removeTodo,updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
