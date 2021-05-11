import { IsNotEmpty, IsString } from "class-validator";
import { cctvData } from "../entity/cctvData.entity";

/**
 * test data
{
	"pk":"6fcea368-6f85-4f40-ba76-5c8a03c01c1a",
	"user":"ho lee fuck",
	"cctv_state":"success",
	"success_at":"2021-05-11 22:15:11.482553"
}
 */
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