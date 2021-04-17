import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    ) {
        console.log(data);

        const data_dto: SocketDataDTO = new SocketDataDTO;
        data_dto.cctv_number = data.cctv_number;
        data_dto.cctv_location = data.cctv_location;
        data_dto.cctv_data = data.cctv_data;

        const data_entity = await data_dto.toEntity();

        const result = await this.cctvData_Repo.save(data_entity);
        console.log("repo result : ", result);

        return "success";
    }
}
