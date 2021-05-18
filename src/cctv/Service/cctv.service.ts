import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { changeStateDataDTO } from '../DTO/change-state-data.dto';
import { CctvDataDTO } from '../DTO/cctv-data.dto';
import { cctvData } from "../entity/cctvData.entity";
import { user } from '../entity/user.entity';
import { cctvDataRepo, userRepo } from '../Repo/cctv.repo';


@Injectable()
export class CctvService {

    constructor(
		@InjectRepository(cctvData) private cctvData_Repo: cctvDataRepo,
        @InjectRepository(user) private user_Repo: userRepo
	) {}

    /**
     * TESST
     * @param data 
     * @returns 
     */
    public async saveData(
        data: CctvDataDTO
    ): Promise<cctvData> {
        const data_dto: CctvDataDTO = new CctvDataDTO;
        data_dto.cctv_number = data.cctv_number;
        data_dto.cctv_location = data.cctv_location;
        data_dto.cctv_state = data.cctv_state;
        data_dto.cctv_url = data.cctv_url;

        const data_entity = await data_dto.toEntity();

        const result = await this.cctvData_Repo.save(data_entity);
        console.log("repo result : ", result);

        return result;
    }

    public async newUser(
        name: string
    ): Promise<void> {
        console.log(name);

        const _user = new user;
        _user.name = name;
        console.log("_user : ", _user);

        const result = await this.user_Repo.save(_user);
        console.log("result : ", result);

        return;
    }

    public async changeStateData(
        changeStateData_DTO: changeStateDataDTO
    ): Promise<void> {

        const target = await this.cctvData_Repo.findOne({
            where: { pk: changeStateData_DTO.pk }
        })
        
        target.cctv_state = changeStateData_DTO.cctv_state;
        target.success_at = changeStateData_DTO.success_at;
        target.user_pk = changeStateData_DTO.user_pk
        
        const result = await this.cctvData_Repo.save(target);
        console.log("repo result : ", result);

        return;
    }

    public async getDataList(){

    }

    public async getData(){
        
    }
}
