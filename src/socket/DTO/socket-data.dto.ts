import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { cctvData } from "../entity/cctv.entity";

export class SocketDataDTO {
    @IsNotEmpty()
	@IsString()
	cctv_number: string;
	
	@IsNotEmpty()
	@IsString()
	cctv_location: string;

    @IsNotEmpty()
	@IsString()
	cctv_data: string;

    public async toEntity() {
		const { cctv_number, cctv_location, cctv_data} = this;

		const Data_Entity = new cctvData;
		
		Data_Entity.cctv_number = cctv_number;
		Data_Entity.cctv_location = cctv_location;
        Data_Entity.cctv_data = cctv_data;

		return Data_Entity;
	}
}