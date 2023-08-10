import axios from 'axios';
import { ITodo, ITodoState } from './../types/types';

export class TodoApi{
    static async getTodos():Promise<ITodoState[]>{
        const res=await axios.get('http://localhost:3000/todos');
        return res.data;
    }
    static async createTodo(todo:Partial<ITodo>):Promise<ITodoState[]>{
        const res=await axios.post('http://localhost:3000/todos',todo);
        return res.data;
    }
    static async completeTodo(todo:Partial<ITodo>):Promise<void>{
        const res=await axios.put(`http://localhost:3000/todos/${todo.id}`,todo);
    }
    static async deleteTodo(idTodo:string):Promise<void>{
        const res=await axios.delete(`http://localhost:3000/todos/${idTodo}`);
    }
    static async editTodo(todo:Partial<ITodo>):Promise<ITodo>{
        const res=await axios.put(`http://localhost:3000/todos/${todo.id}`, todo);
        return res.data[1][0]
    }
}