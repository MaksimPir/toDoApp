import { databaseConfig } from './config/configuration';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { Module } from '@nestjs/common';
import { TodoModule } from './todos/todo.module';
import { ConfigModule } from '@nestjs/config/dist';
import { SequelizeConfigService } from './config/sequelizeConfig.service';


@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports:[ConfigModule],
      useClass:SequelizeConfigService
    }),
    ConfigModule.forRoot({
      load:[databaseConfig]
    }),
    TodoModule,
  ],
})
export class AppModule {}
