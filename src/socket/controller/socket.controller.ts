import { Body, Controller, Get, Post } from '@nestjs/common';
import { SocketService } from 'src/socket/socket.service/socket.service';
import { SocketDataDTO } from '../DTO/socket-data.dto';

@Controller()
export class SocketController {
    constructor(private readonly Socket_Service: SocketService) {}

    @Get()
    saveData( @Body() data: SocketDataDTO ): boolean {
        this.Socket_Service.saveData(data);
        
        return true;
    }

    // @Post()
    // create(@Body() movieData: ) {
    //     console.log(movieData);

    //     return this.moviesService.create(movieData);
    // }
}
