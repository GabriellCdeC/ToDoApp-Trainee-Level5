import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

import Form from './components/Form'
import Todo_Boards from './components/Todo_Boards'

function App () {

 

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')  


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

      <Todo_Boards 
        setTodos={setTodos} 
        todos={todos}
      />
    </div>
  )

}


export default App;
