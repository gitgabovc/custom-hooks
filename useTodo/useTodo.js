import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialValue =[];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodo = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, initialValue , init)


    useEffect(() => {
      
      localStorage.setItem("todos", JSON.stringify(todos));
      
    }, [todos])
    

    const onNewTodo = (todo)=>{
    //    console.log(todo);
        const action = {
            type:'add todo',
            payload: todo
        };

        dispatch(action);
    }
    const onDeleteTodo = (id)=>{
        //    console.log(todo);
            const action = {
                type:'delete todo',
                payload: id
            };
    
            dispatch(action);
    }
    const onToggleTodo = (id)=>{
        const action = {
            type:'toggle todo',
            payload: id
        };

        dispatch(action);
    }
  
    return {
    todos,  
    onNewTodo, 
    onDeleteTodo, 
    onToggleTodo,
    completadas: todos.length,
    noCompletadas: todos.filter(todo=> !todo.done).length
    
  }
}

// const [todos, dispatch] = useReducer(todoReducer, initialValue, init);

    // useEffect(() => {
    //   localStorage.setItem("todos", JSON.stringify(todos));
    
    // }, [todos])
    

    // const onNewTodo = (todo)=>{
    // //    console.log(todo);
    //     const action = {
    //         type:'add todo',
    //         payload: todo
    //     };

    //     dispatch(action);
    // }
    // const onDeleteTodo = (id)=>{
    //     //    console.log(todo);
    //         const action = {
    //             type:'delete todo',
    //             payload: id
    //         };
    
    //         dispatch(action);
    // }
    // const onToggleTodo = (id)=>{
    //     const action = {
    //         type:'toggle todo',
    //         payload: id
    //     };

    //     dispatch(action);
    // }