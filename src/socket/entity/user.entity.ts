import {
	Entity,

	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,

	OneToOne,
	OneToMany,
	JoinColumn,
	ManyToOne,

} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { cctvData } from "./cctvData.entity";

/**
 * Data Entity
 */
@Entity({ name: "user" })
export class user {
	
	@PrimaryGeneratedColumn("uuid")
	pk: string;

	@OneToMany(
		(type) => cctvData, 
		(cctvData) => cctvData.user
	) 
    cctvinfo: string;

	@Column({ name: "user_id", nullable: true })
	user_id: string;

}

