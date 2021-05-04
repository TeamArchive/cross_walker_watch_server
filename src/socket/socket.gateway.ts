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
        console.log("connect")
        this.server.emit('connect', "client connect");
    }

    async handleDisconnect() {
        console.log("disconnect")
        this.server.emit('disconnect', "client connect");
    }

    @SubscribeMessage('SendData')
    async GetData( 
        client, 
        data: SocketDataDTO 
    ): Promise<String> {
        if( !data.cctv_number || !data.cctv_location || !data.cctv_state ) {
            console.log("data error");
            return 'data error';
        }
            
        const saveData_Result = this.socketservice.saveData( data )
        console.log(saveData_Result);

        if( !saveData_Result ) {
            console.log("save Data error");
            return 'save Data error';
        }

        client.broadcast.emit( 'GetData', saveData_Result );
    }

}