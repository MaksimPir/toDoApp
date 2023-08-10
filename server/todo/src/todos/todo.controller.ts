import { UpdateTodo } from './dto/update-todo.dto';
import { CreateTodo } from './dto/create-todo.dto';
import { Get, Controller, Param, Post, Body, HttpCode, HttpStatus, Header, Put, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController{
    constructor(
        private readonly todoService: TodoService
    ){}
    
    @Get()
    getAllTodos()
    {
        return this.todoService.getAll();
    }
    
    @Get(':id')
    getOneTodo(@Param('id') id:string)
    {
        return this.todoService.getOne(id);
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type','application/json')
    createTodo(@Body() createTodo:CreateTodo)
    {
        return this.todoService.createTodo(createTodo);
    }
    @Put(':id')
    updateTodo(@Body() updateTodo:UpdateTodo, @Param('id') id:string)
    {
        return this.todoService.UpdateTodo(id,updateTodo);
    }
    @Delete(':id')
    deleteTodo(@Param('id') id:string)
    {
        this.todoService.remove(id);
    }
}