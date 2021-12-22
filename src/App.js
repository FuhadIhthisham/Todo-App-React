import { useState, useEffect } from 'react';

import './App.css';

//importing components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  // states
  const [inputText, setInputText] = useState('')
  const [todos,setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  // Functions

  // get todos from local storage
  useEffect(()=>{
    getLocalTodos()
  },[])

  // save to local storage and filtering
  useEffect(()=>{
    filterHandler()
    saveLocalTodos();
  },[todos, status])


  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case "uncompleted": 
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  // Save to local storage
  const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    else{
      let localTodos = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)))
      setTodos(localTodos)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My ToDo</h1>
      </header>
      
      <Form 
        setTodos = {setTodos} 
        todos = {todos} 
        setInputText = {setInputText} 
        inputText = {inputText}
        setStatus = {setStatus} 
      />

      <TodoList todos = {todos} setTodos = {setTodos} filteredTodos = {filteredTodos} />
    </div>
  );
}

export default App;
