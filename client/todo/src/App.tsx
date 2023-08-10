import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Header } from './components/Header/Header';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';
import { getTodos } from './redux/actions';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getTodos())
  },[])
 const [counter,setCounter]=useState(0)
  const clickInc=()=>{
   // setCounter((x)=>++x)
    setCounter(counter+1)
  }
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={clickInc} className="btn btn-success">Создать</button>
      <Header/>
      <main>
        <section>
          <div className="container pt-4">
            <TodoForm/>
            <h2 className='pt-3'>Новые дела</h2>
            <TodoList/>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
