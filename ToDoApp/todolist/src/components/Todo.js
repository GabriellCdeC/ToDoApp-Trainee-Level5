import React, { useState } from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
    }

    const completeHeadler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id && item.doing === true) {      
                    return {
                        ...item, 
                        completed: true,
                    }               
                    
                }else if(item.id === todo.id && item.doing === false) {
                    return {
                        ...item, 
                        doing: true,
                    } 
                }

                return item
            }
                
        ))}
        
    

    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={completeHeadler} className="complete-btn"> <i className="fas fa-check"> </i></button>
            <button onClick={deleteHandler} className="trash-btn"> <i className="fas fa-trash"> </i></button>
        </div>
    )
}

export default Todo