import { Module } from '@nestjs/common';
import { CctvModule } from 'src/cctv/cctv.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cctvData } from 'src/cctv/entity/cctvData.entity';
import { user } from 'src/cctv/entity/user.entity';

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
        CctvModule],
    controllers: [],
    providers: [],
})

export class AppModule {}
