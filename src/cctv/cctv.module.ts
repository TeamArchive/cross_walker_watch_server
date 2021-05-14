import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CctvController } from './controller/cctv.controller';
import { cctvData } from './entity/cctvData.entity';
import { user } from './entity/user.entity';
import { ChatGateway } from './socket.gateway';
import { CctvService } from './socket.service/cctv.service';

@Module({
    imports: [TypeOrmModule.forFeature([cctvData, user])],
    controllers: [CctvController],
    providers: [
        CctvService, 
        ChatGateway
    ]
})
export class CctvModule {
    constructor(private connection: Connection) {}
}
