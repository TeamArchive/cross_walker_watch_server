import { IsNotEmpty, IsString } from "class-validator";
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

}