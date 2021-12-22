import {v4 as uuid} from 'uuid'
import Swal from 'sweetalert2'


import React from "react";

const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {

    const uid = uuid().slice(0,8)

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        if(inputText === ''){
            Swal.fire({
                icon: 'error',
                text: "Todo Won't Be Blank !!"
              })
        }
        else{
            setTodos([
                ...todos,
                {
                    text: inputText,
                    completed: false,
                    id: uid
                }
            ])
        }
        setInputText('')
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form