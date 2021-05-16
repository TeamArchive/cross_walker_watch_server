import { IsNotEmpty, IsString } from "class-validator";
import { cctvData } from "../entity/cctvData.entity";
import { user } from '../entity/user.entity';

export class changeStateDataDTO {
    @IsNotEmpty()
	@IsString()
	pk: string;
	
	@IsString()
	user_pk: string;
	
    @IsNotEmpty()
	@IsString()
	cctv_state: string;

	@IsNotEmpty()
	@IsString()
	success_at: string;

	public toEntity() {
		const { pk, cctv_state, success_at } = this;

		const Data_Entity = new cctvData;
		
		Data_Entity.pk = pk;
        Data_Entity.cctv_state = cctv_state;
		Data_Entity.success_at = success_at;

		return Data_Entity;
	};

}