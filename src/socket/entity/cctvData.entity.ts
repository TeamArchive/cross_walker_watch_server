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
import { user } from "./user.entity";

@Entity({ name: "cctvData" })
export class cctvData {
	
	@PrimaryGeneratedColumn("uuid")
	pk: string;

	@ManyToOne((type) => user, user => user.manage_cctv, { nullable: true })
	@JoinColumn({ name: "user" })
	user: user;

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
	
	@Column({ name: "success_at", nullable: true })
	success_at: string;

	@Column({ name: "cctv_notify", nullable: true })
	cctv_notify: number;

    public updateEntity(target) {
		console.log("target : ", target);
		
		const { cctv_state, success_at } = this;
		target.cctv_state = cctv_state;
        target.success_at = success_at;
	}
}

