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
	@Column({ name: "cctv_number", nullable: false })
	cctv_number: string;

	@IsNotEmpty()
	@Column({ name: "cctv_location", nullable: false })
	cctv_location: string;

	@IsNotEmpty()
	@Column({ name: "cctv_state", nullable: false })
	cctv_state: string;

	@IsNotEmpty()
	@Column({ name: "cctv_url", nullable: false })
	cctv_url: string;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

	@Column({ name: "user", nullable: true })
	user: string;
	
	@Column({ name: "success_at", nullable: true })
	success_at: string;

}

