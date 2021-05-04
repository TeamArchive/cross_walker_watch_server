import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { cctvData } from "../entity/cctv.entity";

export class changeStateDataDTO {
    @IsNotEmpty()
	@IsString()
	pk: string;
	
	@IsNotEmpty()
	@IsString()
	user: string;

    @IsNotEmpty()
	@IsString()
	cctv_state: string;

	@IsNotEmpty()
	@IsString()
	success_at: string;

    public async toEntity() {
		const { pk, user, cctv_state, success_at } = this;

		const Data_Entity = new cctvData;
		
		Data_Entity.pk = pk;
		Data_Entity.user = user;
        Data_Entity.cctv_state = cctv_state;
		Data_Entity.success_at = success_at;


		return Data_Entity;
	}

    public updateEntity(target) {
		const { cctv_state, success_at } = this;

		target.entity.cctv_state = cctv_state;
        target.entity.success_at = success_at;
	}
}