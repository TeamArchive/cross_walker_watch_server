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
	@Column({ name: "cctv_number" })
	cctv_number: string;

	@IsNotEmpty()
	@Column({ name: "cctv_location" })
	cctv_location: string;

	@IsNotEmpty()
	@Column({ name: "cctv_data" })
	cctv_data: string;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

}

