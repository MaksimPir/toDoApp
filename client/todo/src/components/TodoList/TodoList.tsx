import { useDispatch, useSelector } from "react-redux"
import { TransitionGroup,CSSTransition} from "react-transition-group"
import { completeTodo, deleteTodo, editTodo } from "../../redux/actions"
import { ITodoReducer } from "../../types/types"
import { TodoItem } from "../TodoItem/TodoItem"
import './styles.css'

export const TodoList=()=>{
    const state=useSelector((state:ITodoReducer)=>state.todoReducer)
    const dispatch=useDispatch()
    const changeTodo=(title:string,done:boolean,id:string)=>{
        dispatch(editTodo(id, done, title))
    }
    const removeTodo=(id:string)=>{
        dispatch(deleteTodo(id))
    }
    const completeTodoItem=(id:string,done:boolean)=>{
        dispatch(completeTodo(id,done))
    }
    return(
   
        <TransitionGroup component='ul' className='list-group'>
            {state.todos.map(todo=>(
                <CSSTransition 
                    timeout={800}
                    className={'todo'}
                    key={todo.id}
                >
                    <TodoItem 
                    deleteTodo={removeTodo}
                    completeTodo={completeTodoItem}
                    todo={todo}
                    changeTodo={changeTodo}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}