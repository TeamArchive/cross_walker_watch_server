import { IsNotEmpty, IsString } from "class-validator";
import { cctvData } from "../entity/cctvData.entity";

/**
 * test data
{
	"cctv_number":"e3",
	"cctv_location":"감삼네거리",
	"cctv_state":"warning",
	"cctv_url":"www.naver.com"
}

{
	"pk":"9db06e30-33ce-4882-b0ff-6fe3db567d8b",
	"user_pk":"a69046c7-ddc4-4790-9717-23b4b0dee36f",
	"cctv_state":"success",
	"success_at":"2021-05-11 22:15:11.482553"
}
 */
export class CctvDataDTO {
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