import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

async function getter() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const response = await res.json();
  return response;
}

function App() {
  const [todos, setTodos] = useState([]);

  

  // useEffect( () => {
  //   fetchData();
  // },[])

  return (
    <>
     {todos.map((todo) => (
      <li key={todo.id}>{todo.title}</li>
     ))}
    </>
  )
}

export default App
