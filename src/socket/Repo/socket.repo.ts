import { EntityRepository, Repository } from "typeorm";
import { cctvData } from "../entity/cctv.entity";

@EntityRepository(cctvData)
export class cctvDataRepo extends Repository<cctvData> {

}
