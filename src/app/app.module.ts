import { Module } from '@nestjs/common';
import { SocketModule } from 'src/socket/socket.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cctvData } from 'src/socket/entity/cctvData.entity';
import { user } from 'src/socket/entity/user.entity';

const ormconfig = require('../../ormconfig.json');

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'sk362712',
            database: 'cross_walker_watch',
            entities: [cctvData, user],
            synchronize: true,
        }),
        SocketModule],
    controllers: [],
    providers: [],
})

export class AppModule {}
