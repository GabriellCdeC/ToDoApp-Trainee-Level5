import React from 'react'


const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                text: inputText,
                doing: false,
                completed: false,
                id: (Math.random() * 1000).toFixed(0)
            }
        ])
        setInputText("")
    }

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
   
    

    return (
        <form>
            <input value={inputText} placeholder="Digite um novo ToDo" onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">Mostrar tudo</option>
                    <option value="completed">Feito</option>
                    <option value="doing">Fazendo</option>
                    <option value="todo">A fazer</option>
                </select>
            </div>
        </form>
    )
}

export default Form