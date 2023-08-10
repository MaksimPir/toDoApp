import { Injectable } from '@nestjs/common';
import { EnumConfig } from './enumConfig/enumConfig';
import { ConfigService } from "@nestjs/config/dist";
import { SequelizeModuleOptions, SequelizeOptionsFactory } from "@nestjs/sequelize";
import { Todo } from 'src/todos/models/todo.module';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory{
    constructor(private readonly configService: ConfigService){}
    createSequelizeOptions(): SequelizeModuleOptions
    {
        const {
            pg:{dialect, logging, host,port,username,password,database},
        }=this.configService.get(EnumConfig.DATABASE);
        return {
            dialect,
            logging, 
            host,
            port,
            username,
            password,
            database,
            models:[Todo],
            autoLoadModels:true,
            synchronize:true,
        }
    }
}