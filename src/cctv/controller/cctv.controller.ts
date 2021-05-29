import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CctvService } from 'src/cctv/Service/cctv.service';
import { changeStateDataDTO } from '../DTO/change-state-data.dto';
import { CctvDataDTO } from '../DTO/cctv-data.dto';
import admin from 'firebase-admin';

@Controller()
export class CctvController {
    constructor( 
        private readonly cctv_Service: CctvService 
    ) {
        let serAccount = require('../../crosswalk-watcher-967f4-firebase-adminsdk-o67ps-750cf93b3a')

        admin.initializeApp({
            credential: admin.credential.cert(serAccount),
        })
    }

    @Post()
    saveData( @Body() SocketData_DTO: CctvDataDTO ): void {
        this.cctv_Service.saveData(SocketData_DTO).then((result) => {
                let target_token = '< HERE TO DEVICE TOKEN >' // put in there device token

                let message = {
                    Notification: {
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

    @Put()
    changeStateData( @Body() changeStateData_DTO: changeStateDataDTO ): void {
        const result = this.cctv_Service.changeStateData(changeStateData_DTO);
        if(!result){
            console.log("cctv_Service.changeStateData Error");
        }
        return;
    }

    @Post('/user')
    newUser( @Body() body: string ): void {
        const result = this.cctv_Service.newUser(body["name"]);
        if(!result){
            console.log("cctv_Service.newUser Error");
        }
        return;
    }

    @Post('/datalist')
    getDataList( @Body() body ) {
        const getDataList_result = this.cctv_Service.getDataList(
            body.offset,
            body.limit
        );
        if( !getDataList_result ){
            console.log("cctv_Service.getDataList Error");
        }
        return getDataList_result;
    }

    @Get('/:cctv_pk')
    getData( @Param('cctv_pk') cctv_pk: string){
        const getData_result = this.cctv_Service.getData(
            cctv_pk
        );
        if( !getData_result ){
            console.log("cctv_Service.getData Error");
        }
        return getData_result
    }

}
