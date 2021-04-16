import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SocketDataDTO } from '../DTO/socket-data.dto';
import { cctvDataRepo } from '../Repo/socket.repo';

@Injectable()
export class SocketService {

    private cctvData_Repo: cctvDataRepo;
    private data_dto: SocketDataDTO;

    public async saveData(
        data
        ) {
        this.data_dto.cctv_number = data.cctv_number
        this.data_dto.cctv_location = data.cctv_location
        this.data_dto.cctv_data = data.cctv_data

        const data_entity = await this.data_dto.toEntity();
        
        await this.cctvData_Repo.save(data_entity);

        return;
    }
}
