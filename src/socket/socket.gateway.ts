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
        SocketData_DTO: SocketDataDTO 
    ): Promise<String> {
        if( !SocketData_DTO.cctv_number || !SocketData_DTO.cctv_location || !SocketData_DTO.cctv_state || !SocketData_DTO.cctv_url) {
            console.log("data error");
            return 'data error';
        }
            
        const saveData_Result = this.socketservice.saveData( SocketData_DTO )
        console.log(saveData_Result);

        if( !saveData_Result ) {
            console.log("save Data error");
            return 'save Data error';
        }

        client.broadcast.emit( 'GetData', saveData_Result );
    }

}