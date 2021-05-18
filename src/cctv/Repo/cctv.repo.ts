import { EntityRepository, Repository } from "typeorm";
import { cctvData } from "../entity/cctvData.entity";
import { user } from '../entity/user.entity';

const ShortInfoSelect = [
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
export class cctvDataRepo extends Repository<cctvData> {

    public async getDataList( offset: number, limit: number ) {
		return this.createQueryBuilder("cctvdata")
			.select(ShortInfoSelect)
			.skip(offset)
			.take(limit)
			.getMany();
	}

    public async getData( cctvdata_pk: string ) {
		return this.createQueryBuilder("cctvdata")
			.where("cctvdata.pk = :cctvdata_pk", { cctvdata_pk })
			.getOne();
	}

}

@EntityRepository(user)
export class userRepo extends Repository<user> {}
