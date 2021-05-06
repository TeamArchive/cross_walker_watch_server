import { Body, Controller, Get, Post } from '@nestjs/common';
import { SocketService } from 'src/socket/socket.service/socket.service';
import { changeStateDataDTO } from '../DTO/change-state-data.dto';
import { SocketDataDTO } from '../DTO/socket-data.dto';

@Controller()
export class SocketController {
    constructor(private readonly Socket_Service: SocketService) {}

    @Post()
    saveData( @Body() SocketData_DTO: SocketDataDTO ): boolean {
        this.Socket_Service.saveData(SocketData_DTO);
        
        return true;
    }

    @Post('/state')
    create(@Body() changeStateData_DTO: changeStateDataDTO) {
        console.log("control <- DTO : ", changeStateData_DTO);

        this.Socket_Service.changeStateData(changeStateData_DTO);
        return true;
    }
}
