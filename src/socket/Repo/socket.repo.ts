import { EntityRepository, Repository } from "typeorm";
import { cctvData } from "../entity/cctvData.entity";

@EntityRepository(cctvData)
export class cctvDataRepo extends Repository<cctvData> {}
