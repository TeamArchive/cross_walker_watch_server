import { IsNotEmpty, IsString } from "class-validator";
import { cctvData } from "../entity/cctvinfo.entity";

export class SocketDataDTO {
    @IsNotEmpty()
	@IsString()
	cctv_number: string;
	
	@IsNotEmpty()
	@IsString()
	cctv_location: string;

    @IsNotEmpty()
	@IsString()
	cctv_state: string;

	@IsNotEmpty()
	@IsString()
	cctv_url: string;

    public async toEntity() {
		const { cctv_number, cctv_location, cctv_state, cctv_url } = this;

		const Data_Entity = new cctvData;
		
		Data_Entity.cctv_number = cctv_number;
		Data_Entity.cctv_location = cctv_location;
        Data_Entity.cctv_state = cctv_state;
		Data_Entity.cctv_url = cctv_url;


		return Data_Entity;
	}
}