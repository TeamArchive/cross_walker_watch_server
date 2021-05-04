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

/**
 * Data Entity
 */
@Entity({ name: "data" })
export class cctvData {
	
	@PrimaryGeneratedColumn("uuid")
	pk: string;

	@IsNotEmpty()
	@Column({ name: "cctv_number", nullable: true })
	cctv_number: string;

	@IsNotEmpty()
	@Column({ name: "cctv_location", nullable: true })
	cctv_location: string;

	@IsNotEmpty()
	@Column({ name: "cctv_state", nullable: true })
	cctv_state: string;

	@IsNotEmpty()
	@Column({ name: "cctv_url", nullable: true })
	cctv_url: string;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

	@Column({ name: "user" })
	user: string;
	
	@Column({ name: "success_at" })
	success_at: string;

}

