import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";

//inicializaciones
  //REDUCER  
  //const initialState = []

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }


export const useTodos = () => {



  const [todos, dispatch] = useReducer(todoReducer, [], init)
  //

  //useEffect
  useEffect(() => {
    //console.log(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  //


  const handleNewTodo = ( todo ) => {
    //console.log({ todo });

    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action);

  }  

  const handleDeleteTodo = (id) => {

    //console.log({id});

    const action = {
      type: '[TODO] Remove Todo',
      payload: id
    }

    dispatch(action)
  }

  const handleToggleTodo = (id) => {

   //console.log({id});

    const action = {
      type: '[TODO] Toggle Todo',
      payload: id
    }

    dispatch(action)    
    }  

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo=> !todo.done).length;




    return {
        todos, 
        todosCount, 
        pendingTodosCount,
        handleDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo

    }
}
