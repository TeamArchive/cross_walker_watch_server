import { Module } from '@nestjs/common';
import { SocketModule } from 'src/socket/socket.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

const ormconfig = require('../../ormconfig.json');
console.log(ormconfig);

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), 
    SocketModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
