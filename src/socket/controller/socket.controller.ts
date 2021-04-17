import { Body, Controller, Get } from '@nestjs/common';
import { SocketService } from 'src/socket/socket.service/socket.service';
import { SocketDataDTO } from '../DTO/socket-data.dto';

@Controller()
export class SocketController {
    constructor(private readonly Socket_Service: SocketService) {}

    @Get()
    saveData( @Body() data: SocketDataDTO ): String {
        this.Socket_Service.saveData(data);
        
        return "success";
    }
}
