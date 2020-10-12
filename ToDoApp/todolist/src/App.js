import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

import Form from './components/Form'
import TodoList from './components/TodoList'

function App () {

 

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilterTodos] = useState([])


  useEffect(() =>{
      filterHandler()
  }, [todos, status])

  const filterHandler = () =>{
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
      break;

      case 'doing':
        setFilterTodos(todos.filter(todo => todo.completed === false && todo.doing === true))
      break;
      
      case 'todo':
        setFilterTodos(todos.filter(todo => todo.completed === false && todo.doing === false))
      break;
    
      default:
        setFilterTodos(todos)
      break;
    }
  }

  return (
    <div className="App">
      <header>Kanban ToDo List</header>

      <Form 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        inputText={inputText} 
        setStatus={setStatus}
      />

      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  )

}


export default App;
