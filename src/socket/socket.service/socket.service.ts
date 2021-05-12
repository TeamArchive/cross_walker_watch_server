import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { changeStateDataDTO } from '../DTO/change-state-data.dto';
import { SocketDataDTO } from '../DTO/socket-data.dto';
import { cctvData } from "../entity/cctvData.entity";
import { cctvDataRepo, userRepo } from '../Repo/socket.repo';


@Injectable()
export class SocketService {

    constructor(
		@InjectRepository(cctvData) private cctvData_Repo: cctvDataRepo,
        @InjectRepository(cctvData) private user_Repo: userRepo
	) {}

    /**
     * TESST
     * @param data 
     * @returns 
     */
    public async saveData(
        data: SocketDataDTO
    ): Promise<void> {
        const data_dto: SocketDataDTO = new SocketDataDTO;
        data_dto.cctv_number = data.cctv_number;
        data_dto.cctv_location = data.cctv_location;
        data_dto.cctv_state = data.cctv_state;
        data_dto.cctv_url = data.cctv_url;

        const data_entity = await data_dto.toEntity();

        const result = await this.cctvData_Repo.save(data_entity);
        console.log("repo result : ", result);

        return;
    }

    public async changeStateData(
        changeStateData_DTO: changeStateDataDTO
    ): Promise<void> {

        const target = await this.cctvData_Repo.findOne({
            where: { pk: changeStateData_DTO.pk }
        })
        
        if(changeStateData_DTO.user) {
            const user = await this.user_Repo.findOne({
                where: { pk: changeStateData_DTO.user_pk }
            })
            target.user = user
        }
        
        target.cctv_state = changeStateData_DTO.cctv_state;
        target.success_at = changeStateData_DTO.success_at;

        const data_entity = await target.toEntity();

        const result = await this.cctvData_Repo.save(data_entity);
        console.log("repo result : ", result);

        return;
    }
}
