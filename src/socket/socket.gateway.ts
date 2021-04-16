import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { SocketDataDTO } from './DTO/socket-data.dto';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server;

    private data: SocketDataDTO;

    async handleConnection() {
        this.server.emit('connect', "client connect");
    }

    async handleDisconnect() {
        this.server.emit('disconnect', "client connect");
    }

    @SubscribeMessage('GetData')
    async GetData(client, data){
        if(!data.cctv_number || 
            !data.cctv_location || !data.cctv_data)
            console.log("no data");
            
        client.broadcast.emit('GetData', data);

    }s

}