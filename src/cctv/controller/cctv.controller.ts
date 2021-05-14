import { Body, Controller, Get, Post } from '@nestjs/common';
import { CctvService } from 'src/cctv/Service/cctv.service';
import { changeStateDataDTO } from '../DTO/change-state-data.dto';
import { CctvDataDTO } from '../DTO/cctv-data.dto';

const admin = require('firebase-admin')

@Controller()
export class CctvController {
    constructor(private readonly Socket_Service: CctvService) {
        let serAccount = require('../../crosswalk-watcher-967f4-firebase-adminsdk-o67ps-750cf93b3a')

        admin.initializeApp({
            credential: admin.credential.cert(serAccount),
        })
    }

    @Post()
    saveData( @Body() SocketData_DTO: CctvDataDTO ): void {
        this.Socket_Service.saveData(SocketData_DTO).then((result) => {
                let target_token = '< HERE TO DEVICE TOKEN >' // put in there device token

                let message = {
                    data: {
                    title: 'Accident detected at ' + result.cctv_location,
                    body: ( 'Accident occurred at ' + result.cctv_number + 
                            ' in ' + result.cctv_location ),
                    },
                    token: target_token,
                }

                admin
                    .messaging()
                    .send(message)
                    .then(function (response) {
                        console.log('Successfully sent push alarm message : ', response)
                    })
                    .catch(function (err) {
                        console.log('Error sending push alarm message : ', err)
                    })
        });

        return;
    }

    @Post('/state')
    changeStateData( @Body() changeStateData_DTO: changeStateDataDTO ): void {
        const result = this.Socket_Service.changeStateData(changeStateData_DTO);

        return;
    }

    @Post('/user')
    newUser( @Body() body: string ): void {
        const result = this.Socket_Service.newUser(body["name"]);

        return;
    }

}
