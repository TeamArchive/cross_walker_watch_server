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

	@Column({ name: "cctv_notify", nullable: true })
	cctv_notify: number;

	public toEntity() {
		const { pk, user, cctv_state, success_at } = this;

		const Data_Entity = new cctvData;
		
		Data_Entity.pk = pk;
		Data_Entity.user = user;
        Data_Entity.cctv_state = cctv_state;
		Data_Entity.success_at = success_at;


		return Data_Entity;
	};

    public updateEntity(target) {
		console.log("target : ", target);
		
		const { user, cctv_state, success_at } = this;

		target.user = user;
		target.cctv_state = cctv_state;
        target.success_at = success_at;
	}
}

