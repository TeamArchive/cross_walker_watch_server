import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { SocketController } from './controller/socket.controller';
import { cctvData } from './entity/cctvinfo.entity';
import { ChatGateway } from './socket.gateway';
import { SocketService } from './socket.service/socket.service';

@Module({
    imports: [TypeOrmModule.forFeature([cctvData])],
    controllers: [SocketController],
    providers: [
        SocketService, 
        ChatGateway
    ]
})
export class SocketModule {
    constructor(private connection: Connection) {}
}
