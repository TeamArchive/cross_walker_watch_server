import { Module } from '@nestjs/common';
import { SocketModule } from 'src/socket/socket.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot(), SocketModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
