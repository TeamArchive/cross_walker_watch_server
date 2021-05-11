import { IsNotEmpty, IsString } from "class-validator";
import { cctvData } from "../entity/cctvinfo.entity";

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

}