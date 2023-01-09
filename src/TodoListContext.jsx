import { createContext, useEffect } from "react";
import { useState } from "react";
export const ListContext =  createContext(null)


const TodoListContext = (props) => {
    console.log(props);

    const getodosFromLocalStorage = JSON.parse(localStorage.getItem('allTodos'))  || []
    
    const [todos,setTodos] =useState(getodosFromLocalStorage)

    useEffect(()=>{
      localStorage.setItem('allTodos',JSON.stringify(todos))
     
     },[todos])
  return (
    <ListContext.Provider  value={{todos,setTodos}}>
     {props.children}

    </ListContext.Provider>
  )
}

export default TodoListContext