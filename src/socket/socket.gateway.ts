import { 
    WebSocketGateway, 
    WebSocketServer, 
    SubscribeMessage, 
    OnGatewayConnection, 
    OnGatewayDisconnect 
} from '@nestjs/websockets';
import { SocketDataDTO } from './DTO/socket-data.dto';
import { SocketService } from './socket.service/socket.service';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server;

    constructor( private socketservice : SocketService ) {}
    
    async handleConnection() {
        this.server.emit('connect', "client connect");
    }

    async handleDisconnect() {
        this.server.emit('disconnect', "client connect");
    }

    @SubscribeMessage('GetData')
    async GetData(client, data: SocketDataDTO){
        if(!data.cctv_number || !data.cctv_location || !data.cctv_data) {
                console.log("Get data error");
                client.broadcast.emit('GetData', 'Get data error');
                return;
            }
            
        const saveData_Result = this.socketservice.saveData(data)

        if( !saveData_Result ) {
            console.log("save Data error");
            client.broadcast.emit('GetData', 'save Data error');
            return;
        }

        client.broadcast.emit('GetData', data);
    }

}