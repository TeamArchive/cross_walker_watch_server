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

@Entity({ name: "user" })
export class user {

	@PrimaryGeneratedColumn("uuid")
	pk: string;

	@IsNotEmpty()
	@Column({ name: "name", default: null })
	name: string;
	
	// @OneToMany(
	// 	(type) => cctvData, 
	// 	(cctvData) => cctvData.pk, 
	// 	{ nullable: true }
	// )
	// manage_cctv: cctvData[];

}