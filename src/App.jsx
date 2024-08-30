import React, { useState } from 'react'
import './App.css'
import Todoinput from './assets/components/Todoinput'
import TodoList from './assets/components/TodoList';


function App() {
  const[listTodo,setListTodo]=useState([]);
  let addList=(inputText)=>{
    setListTodo([...listTodo,inputText]);

  }
  return (
      <>
          <h1>Snake design</h1>
      <SnakeDesign/>
  <div className="main-container">
  <div className="center-container">
    <Todoinput addList={addList}/>
    <h1 className="app-heading">Todo List</h1>
    <hr />
    {listTodo.map(( ListItem,i)=>{
        return(<TodoList key={i} item={ListItem}/>
        )
      })
    }
  </div>
</div>
</>  
  )
}

export default App
