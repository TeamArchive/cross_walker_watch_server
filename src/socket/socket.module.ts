import { Module } from '@nestjs/common';
import { ChatGateway } from './socket.gateway';

@Module({
    controllers: [],
    providers: [ChatGateway]
})
export class SocketModule {}
