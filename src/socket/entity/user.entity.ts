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

	@Column({ name: "name", nullable: true })
	name: string;
	
	@OneToMany((type) => cctvData, cctvData => cctvData.pk)
	manage_cctv: cctvData[];

}