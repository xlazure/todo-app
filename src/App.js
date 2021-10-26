import './App.css';
import { useState, useEffect } from 'react';

import { readData } from './supabase/read'
import TodoPanel from './components/TodoPanel/panel';
import TodoList from './components/TodoList/List';

function App() {

  const [data, setData] = useState();

  async function read() {
   const res = await readData()
   setData(res)
  } 

  useEffect(() => {
    read()
  })

  return (
    <div className="App">
      <h1 style={{"color":"white"}}>Todo app</h1>
      <TodoPanel />
      {data !== [] ? <TodoList TodoData={data} /> : <h2>Loading...</h2>}
    </div>
  );
}

export default App;