import { useState } from "react";
import { ITodo } from "../../types/types"
import './styles.css'

interface ITodoProps{
    todo:ITodo;
    deleteTodo:(arg0:string)=>void;
    completeTodo:(arg0:string,arg1:boolean)=>void;
    changeTodo:(arg0:string,arg1:boolean,arg2:string)=>void
}
export const TodoItem=({todo,deleteTodo,completeTodo, changeTodo}:ITodoProps)=>
{
    const [isEdit, setIsEdit]=useState(false);
    const [newtitle, setNewTitle]=useState('');
    const handleSubmit=(event:React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key=='Enter')
        {
            changeTodo(newtitle,todo.done, todo.id)
            setIsEdit(!isEdit)
        }
    }
    const handleTitleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setNewTitle(event.target.value)
    }
    const handleTodoEdit=()=>{
        setNewTitle(todo.title)
        setIsEdit(!isEdit)
    }
    const handleDeleteTodo=()=>{
       deleteTodo(todo.id);  
    }
    const handleCompleteTodo=()=>{
        completeTodo(todo.id,!todo.done);   
     }
    return(
            <li className={
                `todo-item list-group-item d-flex justify-content-between align-items-center ${todo.done? ' list-group-item-success':''}`
                }>
            <div 
                className="todo-text"
                onKeyPress={handleSubmit}
            >
                { isEdit ? 
                <input type='text' onChange={handleTitleChange}  value={newtitle}/> :
                <span className={`${todo.done? 'title-done':''}`}>
                {todo.title}
            </span>
                }
                
            </div>
            <div className="todo-btns">
                <button 
                onClick={handleTodoEdit}
                className="btn btn-primary btn-itemTodo">Update</button>
                {!todo.done &&<button onClick={handleCompleteTodo} className="btn btn-success btn-itemTodo">Done</button>}
                {todo.done &&<button onClick={handleCompleteTodo} className="btn btn-success btn-itemTodo">UnDone</button>}
                <button onClick={handleDeleteTodo} className="btn btn-danger btn-itemTodo">Delete</button>
            </div>
        </li>
        
    )
}