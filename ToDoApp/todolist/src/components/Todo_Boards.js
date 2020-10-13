import React from 'react'

import Todo from './Todo'

const Todo_Boards = ({ todos, setTodos}) => {
    return (
        <div className="todo-board">

            <div className="To_Do todo-board-content">
                <h1>A fazer</h1>
                <div className="todo-container">
                    <ul className="todo-list">
                        {
                            todos.filter(todo => todo.completed === false && todo.doing === false)
                            .map(todo => (
                                <Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo} />
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="doing todo-board-content">
                <h1>Fazendo</h1>
                <div className="todo-container">
                    <ul className="todo-list">
                        {
                            todos.filter(todo => todo.completed === false && todo.doing === true)
                            .map(todo => (
                                <Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo} />
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="done todo-board-content">
                <h1>Feito</h1>
                <div className="todo-container">
                    <ul className="todo-list">
                        {
                            todos.filter(todo => todo.completed === true)
                            .map(todo => (
                                <Todo key={todo.id} text={todo.text} setTodos={setTodos} todos={todos} todo={todo} />
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Todo_Boards