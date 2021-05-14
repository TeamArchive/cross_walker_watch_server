import { EntityRepository, Repository } from "typeorm";
import { cctvData } from "../entity/cctvData.entity";
import { user } from '../entity/user.entity';

@EntityRepository(cctvData)
export class cctvDataRepo extends Repository<cctvData> {}

@EntityRepository(user)
export class userRepo extends Repository<user> {}
