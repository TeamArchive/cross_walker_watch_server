import { EntityRepository, Repository } from "typeorm";
import { cctvData } from "../entity/cctvinfo.entity";

@EntityRepository(cctvData)
export class cctvDataRepo extends Repository<cctvData> {}
