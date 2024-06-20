import {Body, Controller, Get, Post} from '@nestjs/common';
import {TaskDto} from "./task.dto";

@Controller('task') // Esse decorator define também o endpoint da rota
export class TaskController {

    @Post() //Mas posso usar o construtor do Decorator para passar a rota
    create(@Body() task: TaskDto){
        return task;
    }

    @Get()
    index(){
        return 'Hello World';
    }
}