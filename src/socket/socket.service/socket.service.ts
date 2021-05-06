import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { changeStateDataDTO } from '../DTO/change-state-data.dto';
import { SocketDataDTO } from '../DTO/socket-data.dto';
import { cctvData } from '../entity/cctv.entity';
import { cctvDataRepo } from '../Repo/socket.repo';


@Injectable()
export class SocketService {

    constructor(
		@InjectRepository(cctvData) private cctvData_Repo: cctvDataRepo
	) {}

    public async saveData(
        data: SocketDataDTO
    ): Promise<boolean> {
        console.log(data);

        const data_dto: SocketDataDTO = new SocketDataDTO;
        data_dto.cctv_number = data.cctv_number;
        data_dto.cctv_location = data.cctv_location;
        data_dto.cctv_state = data.cctv_state;
        data_dto.cctv_url = data.cctv_url;

        const data_entity = await data_dto.toEntity();

        const result = await this.cctvData_Repo.save(data_entity);
        console.log("repo result : ", result);

        return true;
    }

    public async changeStateData(
        changeStateData_DTO: changeStateDataDTO
    ) {
        const target = await this.cctvData_Repo.findOne({
            where: { pk: changeStateData_DTO.pk }
        })

        if( target.pk === changeStateData_DTO.pk ) {
            changeStateData_DTO.updateEntity(target);

            await this.cctvData_Repo.save(target);

            return target;
        }
		
        return;
    }
}
