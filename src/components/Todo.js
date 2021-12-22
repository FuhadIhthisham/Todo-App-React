import React from 'react'

function Todo({text, todo, todos, setTodos}) {

    // Delete a todo
    const deleteHandler = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    // complete todo
    const completeHandler = () =>{
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed": ''} `}> {text} </li>
            <button onClick={completeHandler} className='complete-btn'> <i className="fas fa-check" aria-hidden="true"></i> </button>
            <button onClick={deleteHandler} className='trash-btn'> <i className="fas fa-trash" aria-hidden="true"></i> </button>
        </div>
    )
}

export default Todo
