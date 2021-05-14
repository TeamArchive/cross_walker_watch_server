import { 
    WebSocketGateway, 
    WebSocketServer, 
    SubscribeMessage, 
    OnGatewayConnection, 
    OnGatewayDisconnect 
} from '@nestjs/websockets';
import { CctvDataDTO } from './DTO/cctv-data.dto';
import { CctvService } from './Service/cctv.service';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server;

    constructor( private socketservice : CctvService ) {}
    
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
        SocketData_DTO: CctvDataDTO 
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