import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports"
import { createTodo, showAlert } from "../../redux/actions";
import { IAlertReducer } from "../../types/types";
import { Alert } from "../Alert/Alert";

export const TodoForm=()=>{
    const dispatch = useDispatch()
    const [title, setTitle]=useState('')
    const alertState=useSelector((state:IAlertReducer)=>state.alertReducer)
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(!title.trim())
        {
            dispatch(showAlert('Название дела не может быть пустым', 'warning'))
            return
        }
        dispatch(createTodo(title))
        setTitle('')

    }
    const handleInputValue=(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value)
    }
    return(
        <div>
             <form onSubmit={handleSubmit} className="mb-3 d-flex align-items-end justify-content-between ">
                {alertState.alertText.length >0 &&<Alert props={alertState}/>}
            <div className="form-group" style={{width: '92%', marginRight:"10px"}}>
                <label className="form-label">Введите название дела</label>
                <input
                    value={title}
                    onChange={handleInputValue}
                    type="text"
                    className="form-control"
                >
                </input>
            </div>
            <button className="btn btn-success">Создать</button>
        </form>
        </div>
       
    )
}