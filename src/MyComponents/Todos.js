import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
    return (
        <div className = "container">
            <h2 className = "my-3">Todos List</h2>
            {props.todos.length===0? "No todos to display" :
           props.todos.map((todo)=>{
               return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>) 
           })
           }
            
            
        </div>
    )
}
