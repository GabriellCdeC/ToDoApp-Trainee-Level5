import React, {Component} from 'react'

import './style.css'


export default class Main extends Component{

    state = {
        todoList: [],
    }

    componentDidMount(){
        this.loadBoards()
    }

    loadBoards = () =>{

    }

    render(){
        return (
            <div className="todo-board">

                <div className="todo todo-item">
                    <h1>A fazer</h1>
                    <ul>
                        <li>
                            
                        </li>
                    </ul>
                </div>

                <div className="doing todo-item">
                    <h1>Fazendo</h1>
                </div>

                <div className="done todo-item">
                    <h1>Feito</h1>
                </div>

            </div>
    
        )
    }
}

