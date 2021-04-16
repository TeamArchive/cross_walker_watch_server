import { Injectable } from '@nestjs/common';
import { Socket } from 'ngx-socket-io';
import { SocketDataDTO } from '../DTO/socket-data.dto';

@Injectable()
export class SocketService {

    constructor(private socket: Socket){}

    getData(data: SocketDataDTO) {
        
    }
}
