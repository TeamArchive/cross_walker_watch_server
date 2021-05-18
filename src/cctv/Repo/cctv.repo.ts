import { EntityRepository, Repository } from "typeorm";
import { cctvData } from "../entity/cctvData.entity";
import { user } from '../entity/user.entity';

export const ShortInfoSelect = [
	"cctvdata.pk",
	"cctvdata.user",
	"cctvdata.cctv_number",
	"cctvdata.cctv_location",
    "cctvdata.cctv_state",
	"cctvdata.cctv_url",
	"cctvdata.created_at",
	"cctvdata.success_at",
];

@EntityRepository(cctvData)
export class cctvDataRepo extends Repository<cctvData> {}

@EntityRepository(user)
export class userRepo extends Repository<user> {}
