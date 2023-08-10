import { UpdateTodo } from './dto/update-todo.dto';
import { CreateTodo } from './dto/create-todo.dto';
import { Todo } from './models/todo.module';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo)
        private todoModel: typeof Todo
    )
    {}
    async getAll():Promise<Todo[]>
    {
        return this.todoModel.findAll();
    }
    async getOne(id:string):Promise<Todo>
    {
        return this.todoModel.findOne({
            where: {
                id,
            }
         });
    }
    async createTodo(createTodo:CreateTodo):Promise<Todo>{
        const todo=new Todo();
        todo.title=createTodo.title;
        todo.done=createTodo.done;
        return todo.save();
    }
    async UpdateTodo(id:string, updateTodo:UpdateTodo):Promise<[affectedCount: number, affectedRows: Todo[]]>{
        return this.todoModel.update(
            {...updateTodo},
            { where: {
                    id
                },
                returning:true
            },
        )
    }
    async remove(id:string):Promise<void>
    {
        const todo=await this.getOne(id);
        await todo.destroy();
    }
}